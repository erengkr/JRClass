import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OgretmengetService } from '../services/ogretmenget.service';
import { Ogretmen } from './ogretmen';
import { OgretmenpostService } from '../services/ogretmenpost.service ';

@Component({
  selector: 'app-ogretmen-kayit',
  templateUrl: './ogretmen-kayit.component.html',
  styleUrls: ['./ogretmen-kayit.component.css'],
  providers: [OgretmengetService,OgretmengetService]
})
export class OgretmenKayitComponent {
ogretmen :Ogretmen =new Ogretmen();
constructor(
  private apiPost:OgretmenpostService,
  private apiGet:OgretmengetService
){
  this.apiGet.getTeache(this.ogretmen).subscribe(data=>{
    console.log(data);
  })
}

onSubmit (form:NgForm){
  this.apiPost.addTeache(this.ogretmen).subscribe(data=>{
    console.log("addTeache Triggered....")
    console.log(data);
  })
}
getOgretmen(){
  this.apiGet.getTeache(this.ogretmen).subscribe(data=>{
    console.log("getOgretmen Triggered....")
    console.log(data);
  })
}

}



  
  
  
   