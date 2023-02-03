import { Component, OnInit } from '@angular/core';
import { Ogrenci } from './ogrenci-liste';
import { HttpClient } from '@angular/common/http';
import { Comment } from './comment';


@Component({
  selector: 'app-ogrenci-liste',
  templateUrl: './ogrenci-liste.component.html',
  styleUrls: ['./ogrenci-liste.component.css']
})

export class OgrenciListeComponent implements OnInit {  
  
  ogrenci!:Ogrenci[];
  comment!:Comment[];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get<Ogrenci[]>("https://localhost:7245/api/Students").subscribe(data => {
      this.ogrenci = data;       
      console.log(data);    
      console.log(this.ogrenci[0].studentID)
    });
    this.http.get<Comment[]>("https://localhost:7245/api/Comments").subscribe(data1=>{
      this.comment=data1
      console.log(data1);      
      console.log(this.comment[1].comment)
    });
  }
}
