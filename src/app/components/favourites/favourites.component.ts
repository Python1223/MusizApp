import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit{
  public tracks : any;

  constructor(private _spotifyService:SpotifyService){}
  ngOnInit(): void {
    this._spotifyService.getProducts()
    .subscribe(res=>{
      this.tracks = res;
    })
  
}
}
