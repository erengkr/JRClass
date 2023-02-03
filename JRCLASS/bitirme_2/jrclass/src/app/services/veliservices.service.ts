import { Injectable } from '@angular/core';
import {Veli} from '../veli-kayit/veli-kayit';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class VeliservicesService {

  constructor(private http:HttpClient) { }

  addParent(veli:Veli):Observable<Veli>{
const httpOptions={
  headers:new HttpHeaders({
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*'   
       
  })
}
return this.http.post<Veli>("https://localhost:7245/api/Parents",
veli,httpOptions)
  }
 
}
