import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
    private authorizationKey= "Bearer BQBA0xGq9eo0GdTWXPcrX15hE1FTa-ePln9NTNygP6rHkWj8NzXLNVKli8_NcDSiMuTgr_FWmRKtwn1V8Ob5s9QznGsoerwsir_ZNlVsE_PEIOOMCB7np5aqmFgsoOAQcSWFsH0VVeJ0G91bpd--o_cxjeA2zZ3fL-Q93Df-1QUkbGkk1dDiTfF5xNHo84zA_aY"
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
      //.pipe(map((res:any)=>{
    // //   return res;
    // // }))
  }
  getProducts(){
    return this.trackList.asObservable();
  }

  addtofav(product : any){
    
    this.favItemList.push(product);
    this.trackList.next(this.favItemList);
    
  }

}
