import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ogrenci } from '../ogrenci-liste/ogrenci-liste';

@Injectable({
  providedIn: 'root'
})
export class LiderServiceService {

  constructor(private http:HttpClient) { }

  addStudent(ogrenciv1:Ogrenci):Observable<Ogrenci>{
    const httpOptions={
      headers:new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*'   
           
      })
    }
    return this.http.post<Ogrenci>("https://localhost:7245/api/Students",
    ogrenciv1,httpOptions)
      }
}
