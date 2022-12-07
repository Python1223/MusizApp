import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'musizApp';

  constructor(){
    localStorage.setItem('status','notloggedin')
  }

}
