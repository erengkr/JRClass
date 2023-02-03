import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ogrenci } from '../ogrenci-liste/ogrenci-liste';

@Injectable({
  providedIn: 'root'
})
export class OgrenciservicesGetService {

  constructor(private http:HttpClient) { }
  
  getStudent(ogrenci:Ogrenci){
    let url="https://localhost:7245/api/Students";
    return this.http.get(url)

  }
  
}
