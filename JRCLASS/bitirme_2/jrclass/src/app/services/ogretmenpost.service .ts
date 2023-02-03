import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ogretmen } from '../ogretmen-kayit/ogretmen';

@Injectable({
  providedIn: 'root'
})
export class OgretmenpostService {

  constructor(private http:HttpClient) { }

  addTeache(ogretmen:Ogretmen):Observable<Ogretmen>{
    const httpOptions={
      headers:new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*'   
           
      })
    }
    return this.http.post<Ogretmen>("https://localhost:7245/api/Teaches",
    ogretmen,httpOptions)
      }
}
