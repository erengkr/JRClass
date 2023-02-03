import { Injectable } from '@angular/core';
import {Veli} from '../veli-kayit/veli-kayit';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class VeliservicesGet {

  constructor(private http:HttpClient) { }
 
  getVeli(veli:Veli){
    let url="https://localhost:7245/api/Parents";
    return this.http.get(url)

  }
 
}
