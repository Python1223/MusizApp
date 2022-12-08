import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
    private authorizationKey= "Bearer BQDaOJNFfDa4gGeLEoBEWFVPNVz0ZxnRoHQGhxmeeq_dVuBlG8jF82UVonk4WSTkoFVfTmHxHFVdskvPVMywrhsnS7nY4OehyKK_uo3zF7jK3g2WCAG2tCn86sqpQe0-jIHpmxAd-S7uEJA17q6vIWwh5N3Rrk2YYVyEFThK_pxAXkHcQRJXTR587_bmGSo46yU"
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
  getProducts(){
    return this.trackList.asObservable();
  }

  addtofav(product : any){
    this.favItemList.push(product);
    this.trackList.next(this.favItemList);
    
  }

}
