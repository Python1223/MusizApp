import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
    private authorizationKey= "Bearer BQAJR7kcBEO7QhYq6-c3MUOxBJPgRkZE_jG3pPyIkm65nk_uKzQM7AyeCu_JQcf-NgGINxdBdGdn03DvwYlfzMwZC5SxxtQAFgX2ZMFIqADoyr0W4tva0RqVHNFNMP6KG3xf0Z0pCuq48JXd5NvGdMwSS-QZ1bqOQaQIj9oG9MHnRd6apHhPoEJA1kjZ5nxJR9o"
  
     httpOptions= {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.authorizationKey
    })
  };
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

}
