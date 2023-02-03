import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, NgForm} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { VeliKayitComponent } from './veli-kayit/veli-kayit.component';
import { OgrenciGirisComponent } from './ogrenci-giris/ogrenci-giris.component';
import { OgretmenKayitComponent } from './ogretmen-kayit/ogretmen-kayit.component';
import {Component} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OgrenciListeComponent } from './ogrenci-liste/ogrenci-liste.component';
import { Ogrenci } from './ogrenci-liste/ogrenci-liste';
import { OkulLiderComponent } from './okul-lider/okul-lider.component';
import { LiderkayitComponent } from './liderkayit/liderkayit.component';
import { LiderOgretmenComponent } from './lider-ogretmen/lider-ogretmen.component';
import { OgrenciFilterPipe } from './okul-lider/ogrenci-filter.pipe';
import { OgretmenFilterPipe } from './lider-ogretmen/ogretmen-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    VeliKayitComponent,
    OgrenciGirisComponent,
    OgretmenKayitComponent,
    OgrenciListeComponent,
    OkulLiderComponent,
    LiderkayitComponent,
    LiderOgretmenComponent,
    OgrenciFilterPipe,
    OgretmenFilterPipe,  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule   

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
