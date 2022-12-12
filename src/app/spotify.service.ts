import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
    private authorizationKey= "Bearer BQDYQlZfVjd-cdj4vVBg19mj6mq-Xzx7pvu7gz5l72IH1j3od6uh_Xb0fGZusdesCuWZ6P2uH_B9uxl1eHAylPhiUmgHUFd1MeUl9-RkGA0nahfXst4TYnN2JihJ8ZDe5HXSFYkBn3AngciJ2xcXMIqjkvBezNMfvegLjhIoFxu7aqKcBv5SNeNi7Haxj5o1S_g"
    httpOptions= {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.authorizationKey
    })
  };
  public favItemList : any =[]
  public trackList = new BehaviorSubject<any>([]);

  constructor(private _httpClient:HttpClient) { }

  

  public getAllArtists(searchQuery:string):Observable<any>{
    let artistURL= `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`;
    return this._httpClient.get<any>(artistURL,this.httpOptions);
  }

  getArtist(artistId:string):Observable<any>{
    let artistURL= `https://api.spotify.com/v1/artists/${artistId}`;
    return this._httpClient.get<any>(artistURL,this.httpOptions);
  }

  getAllAlbums(artistId:string):Observable<any>{
    let albumURL= `https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this._httpClient.get<any>(albumURL,this.httpOptions);

  }

  getAlbum(albumId:string):Observable<any>{
    let albumURL= `https://api.spotify.com/v1/albums/${albumId}`;
    return this._httpClient.get<any>(albumURL,this.httpOptions)
  }

  getAllTracks(albumId:string):Observable<any>{
    let tracksURL= `https://api.spotify.com/v1/albums/${albumId}/tracks`;
    return this._httpClient.get<any>(tracksURL,this.httpOptions)

  }
  getHomeTrack():Observable<any>{
    let url=`https://api.spotify.com/v1/albums/5tWIpECzXPOBGMCKindcd3/tracks`
      return this._httpClient.get<any>(url,this.httpOptions)
  }
  getProducts(){
    return this.trackList
  }

  addtofav(product : any){
    if (localStorage.getItem('status')=='loggedin'){
    this.favItemList.push(product);
    this.trackList.next(this.favItemList);
    }
  }
  removeTrackItem(item:any){
    this.favItemList.map((a:any,index:any)=>{
      if (item.id==a.id){
        this.favItemList.splice(index,1)
      }
    })
  }

}
