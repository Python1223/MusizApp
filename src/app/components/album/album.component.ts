import { Component, Input, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
  public check:any;
  public var?:number;

  constructor(private _activatedRoute:ActivatedRoute ,private _spotifyService:SpotifyService,private router:Router){}
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
  addtofavourites(item: any){
    this._spotifyService.getProducts().subscribe(res=>{this.check = res;})
    // if (this.check.indexOf(item))< 0{ 
    // // console.log(typeof localStorage.getItem("status"))
    this.var= this.check.indexOf(item)
    if (this.var== -1)
    this._spotifyService.addtofav(item)


}



}
