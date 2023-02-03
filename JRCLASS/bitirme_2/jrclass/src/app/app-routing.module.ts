import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { OgrenciGirisComponent } from './ogrenci-giris/ogrenci-giris.component';
import { OgretmenKayitComponent } from './ogretmen-kayit/ogretmen-kayit.component';
import { VeliKayitComponent } from './veli-kayit/veli-kayit.component';
import { Veli } from './veli-kayit/veli-kayit';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { OgrenciListeComponent } from './ogrenci-liste/ogrenci-liste.component';
import { OkulLiderComponent } from './okul-lider/okul-lider.component';
import { LiderkayitComponent } from './liderkayit/liderkayit.component';
import { LiderOgretmenComponent } from './lider-ogretmen/lider-ogretmen.component';


const routes: Routes = [
 
  {path:'jrclass',component:ContentComponent},
  {path:'veli-kayit',component:VeliKayitComponent},
  {path:'ogrenci-giris',component:OgrenciGirisComponent},
  {path:'ogretmen-kayit',component:OgretmenKayitComponent},
  {path:'ogrenci-liste',component:OgrenciListeComponent},
  {path:'okul-lider',component:OkulLiderComponent},
  {path:'liderkayit',component:LiderkayitComponent},
  {path:'okul-lider-ogretmen',component:LiderOgretmenComponent},

   {path:'',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [FormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
