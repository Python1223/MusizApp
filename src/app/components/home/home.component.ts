import { Component ,OnInit} from '@angular/core';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public searchQuery:any;
  //searchQuery?:string|null| undefined;
  public artists:any;
  

  constructor(private _spotifyService:SpotifyService){
    
       
  }
  ngOnInit(): void {
    
  }
  searchArtists(){
    this._spotifyService.getAllArtists(this.searchQuery).subscribe((data)=>{
       this.artists=data.artists.items;
      // this.artists= data;
    });

  }
}
