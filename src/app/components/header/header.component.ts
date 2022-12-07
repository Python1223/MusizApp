import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
ls= localStorage;

constructor(private _activatedRoute:ActivatedRoute ,private router:Router){}

ngOnInit(): void {
}
  LoginHandler(){
    this.router.navigate(['login'])

}
LogoutHandler(){
  localStorage.setItem('status','notloggedin')
}



}
