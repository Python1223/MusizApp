
import { Component, OnInit ,Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:any=''
  password:any =''

  loginForm = new FormGroup({
  username:new FormControl(null,[Validators.required,Validators.minLength(3)]),
  password:new FormControl(null,[Validators.required])
})
  public get user(){return this.loginForm.get('username');}
  
  constructor() {}

  ngOnInit(): void {
  }
SignInHandler(){
   this.username = this.loginForm.get('username')?.value;
   this.password = this.loginForm.get('password')?.value;
   if(this.username==='ritt' && this.password==='rit@123') 
   localStorage.setItem('status','loggedin')
   else
   localStorage.setItem('status','notloggedin')
  
}
}