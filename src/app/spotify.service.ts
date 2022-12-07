import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
    private authorizationKey= "Bearer BQAuaPJXQzZKAesOvS21zA-7jRhPKKW5euCJoALS0kqwGw5wk1N1cWUnU1BvKZlR5qqveceU1UHzPYe5cViehH2scu8ap7JEDMrSyI7zk46U6ChIJl5c5d566Tx8ymODs4YCjvV9uova-6C1fG-HaCb5MAH_UXb8PifOGPM5UeGvdvSSQPfkdnw4o53JPfvVLrI"
    httpOptions= {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.authorizationKey
    })
  };
  public favItemList : any =[]
  public productList = new BehaviorSubject<any>([]);

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
    return this.productList.asObservable();
  }

  addtofav(product : any){
    this.favItemList.push(product);
    this.productList.next(this.favItemList);
    console.log(this.favItemList)
    
  }

}
