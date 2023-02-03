import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OkulLider } from '../liderkayit/okulLider';
import { Ogrenci } from '../ogrenci-liste/ogrenci-liste';

@Injectable({
  providedIn: 'root'
})
export class LiderkayitService { 

  constructor(private http: HttpClient) { }
  addLeader(okulLider: OkulLider): Observable<OkulLider> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.post<OkulLider>("https://localhost:7245/api/SchoolLeaders",
      okulLider, httpOptions)
  }

}

