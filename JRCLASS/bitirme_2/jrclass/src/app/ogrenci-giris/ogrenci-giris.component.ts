import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OgrenciservicesGetService } from '../services/ogrenciservices-get.service';
import { Ogrenci } from './ogrenci';


@Component({
  selector: 'app-ogrenci-giris',
  templateUrl: './ogrenci-giris.component.html',
  styleUrls: ['./ogrenci-giris.component.css'],
  providers:[OgrenciservicesGetService]
})
export class OgrenciGirisComponent {
  ogrenci: Ogrenci=new Ogrenci();  
  constructor(    
    private apiGet:OgrenciservicesGetService
  ){
    this.apiGet.getStudent(this.ogrenci).subscribe(data=>{
      console.log(data);
    })
  }  
  onSubmit (form:NgForm){
    console.log("On Submit Triggered...");
    console.log(form.value);  
    this.apiGet.getStudent(this.ogrenci).subscribe(data=>{
      console.log("getOgrenci Triggered...")
const ogrenciler=data as Ogrenci[];
      console.log(data);
for(var i=0;i<ogrenciler.length;i++){
  console.log(ogrenciler[i].studentName,form.value.studentName,ogrenciler[i].studentName==form.value.studentName)
  if(form.value.studentName==ogrenciler[i].studentName&&form.value.studentCode==ogrenciler[i].studentCode){   

    console.log("giriş başarılı!!!")
    alert("GİRİŞ BAŞARILI")
  }
  else{
    console.log("giriş başarısız")
    alert("GİRİŞ BAŞARISIZ")
  }
}
      
    })

   
  }

  // getOgrenci(){
  //   this.apiGet.getStudent(this.ogrenci).subscribe(data=>{
  //     console.log("getOgrenci Triggered...")
  //     console.log(data);
  //   })
  // }

  // getOgretmen(){
  //   this.apiGet.getTeache(this.ogretmen).subscribe(data=>{
  //     console.log("getOgretmen Triggered....")
  //     console.log(data);
  //   })
  // }

  // verification(form:NgForm){
  //   for(var i=0;i<Ogrenci.length;i++)
  //   {
  //     if(this.ogrenci1[i].studentName==form.value.studentName&&this.ogrenci1[1].studentCode==form.value.studentCode)
  //     {

  //       console.log("giriş Başarılı");
  //     }
  //     console.log("giriş başarısız")
  //   }
  // }
  
}




// for(var i=0;i<Ogrenci.length;i++){
//   if(form.value.studentName==this.ap){

//     console.log("giriş başarılı!!!")
//   }
//   else{
//     console.log("giriş başarısız")
//   }
// }






// async function checkLogin(studentName: string, studentCode: string): Promise<boolean> {
//   // veri tabanına bağlan ve email ve şifreyi kontrol et
//   const user = await database.findUser(studentName, studentCode);
  
//   if (user) {
//     console.log('Giriş başarılı');
//     return true;
//   } else {
//     console.log('Giriş başarısız');
//     return false;
//   }
// }



