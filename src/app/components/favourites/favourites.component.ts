import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit{
  public tracks : any;

  constructor(private _spotifyService:SpotifyService ,private _activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._spotifyService.getProducts()
    .subscribe(res=>{
      this.tracks = res;
    })
  
}
removeItem(item:any){
  this._spotifyService.removeTrackItem(item);
}
}
