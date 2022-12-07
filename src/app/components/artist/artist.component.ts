import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit{
  //artistId?: string | null;
  artistId:any;
  artist:any;
  albums:any;
  constructor(private _activatedRoute:ActivatedRoute, private _spotifyService:SpotifyService){}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap)=> {
      this.artistId = paramMap.get('id');
    });
    this._spotifyService.getArtist(this.artistId).subscribe((data)=>{
      this.artist= data;
    });

    this._spotifyService.getAllAlbums(this.artistId).subscribe((data)=>{
      this.albums= data.items;
    })
    
  }

}
