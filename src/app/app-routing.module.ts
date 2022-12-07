import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { SpotifyService } from './spotify.service';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';


const routes: Routes = [
  {path : '' ,component: HomeComponent ,pathMatch: 'full'},
  {path : 'artists/:id' ,component: ArtistComponent ,pathMatch: 'full'},
  {path : 'albums/:id' ,component:AlbumComponent ,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
