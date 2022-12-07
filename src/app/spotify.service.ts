import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
    private authorizationKey= "Bearer BQBLCckhQmVA6shKRUOohsL_iJ_ebOrHzx9_WFEGNrHHiTuZ2ugcl4IwUl5gIx6ipXMiS3xAVNv8_EK85rrZ4UgL7ZVKT2GPrHmZQUeO9PEHF5hWPGd27utyj3xcphODCRy2B3WEl-jeF0tILigwUwlMVmQeKB2M_rdeRY8DSARAbC8SkQNrrXgCMcFsr8HH2MQ"
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
