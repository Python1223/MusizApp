import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  public products : any;

  constructor(private _spotifyService:SpotifyService){}
  ngOnInit(): void {
    this._spotifyService.getProducts()
    .subscribe(res=>{
      this.products = res;
    })
  
}
}
