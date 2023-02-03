import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VeliservicesService } from '../services/veliservices.service';
import { Veli } from './veli-kayit';
import { VeliservicesGet } from '../services/veliservicesGet';

@Component({
  selector: 'app-veli-kayit',
  templateUrl: './veli-kayit.component.html',
  styleUrls: ['./veli-kayit.component.css'],
 providers: [VeliservicesService,VeliservicesGet]
})
export class VeliKayitComponent   {
veli:Veli=new Veli();

constructor(
  private apiPost:VeliservicesService,
  private apiGet:VeliservicesGet
){
 this.apiGet.getVeli(this.veli).subscribe(data1=>{
  console.log(data1);
 })
}

 onSubmit(form:NgForm){
  console.log("Onsubmit triggered..");
  console.log(form.value);
  this.apiPost.addParent(this.veli).subscribe(data=>{
   
   });
 }

 getParent(){
  this.apiGet.getVeli(this.veli).subscribe(data1=>{
    console.log("getParent Triggerd")
    console.log(data1)
  })
 }
}



