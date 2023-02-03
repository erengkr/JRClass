import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ogrenci } from '../ogrenci-liste/ogrenci-liste';
import { OkulLiderComponent } from '../okul-lider/okul-lider.component';

@Injectable({
  providedIn: 'root'
})
export class OgrenciservicesGetService {

  constructor(private http:HttpClient) { }    


}
