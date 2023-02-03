import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LiderkayitService } from '../services/liderkayit.service';
import { OkulLider } from './okulLider';

@Component({
  selector: 'app-liderkayit',
  templateUrl: './liderkayit.component.html',
  styleUrls: ['./liderkayit.component.css']
})
export class LiderkayitComponent {
okulLider:OkulLider=new OkulLider();
constructor(
  private apiPost:LiderkayitService
){

}
onSubmit (form:NgForm){
  this.apiPost.addLeader(this.okulLider).subscribe(data=>{
    console.log("addLeader Triggered....")
    console.log(data);
  })
}
}
