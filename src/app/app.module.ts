import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { SpotifyService } from './spotify.service';
import { ArtistComponent } from './components/artist/artist.component';
import { HeaderComponent } from './components/header/header.component';
import { AlbumComponent } from './components/album/album.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ArtistComponent,
    HeaderComponent,
    AlbumComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
