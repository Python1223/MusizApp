import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit{
  public albumId:any;
  public album:any;
  public tracks:any;

  constructor(private _activatedRoute:ActivatedRoute ,private _spotifyService:SpotifyService){}
  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe((paraMap:ParamMap)=>{
      this.albumId = paraMap.get('id')
    })

    this._spotifyService.getAlbum(this.albumId).subscribe((data)=>{
      this.album = data;
    })
    this._spotifyService.getAllTracks(this.albumId).subscribe((data)=>{
      this.tracks = data.items;
    })


    
  }


}
