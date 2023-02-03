import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ogretmen } from '../ogretmen-kayit/ogretmen';

@Injectable({
  providedIn: 'root'
})
export class OgretmengetService {
  addTeache(ogretmen: Ogretmen) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  getTeache(ogrentmen:Ogretmen){
    let url="https://localhost:7245/api/Teaches";
    return this.http.get(url)

  }
}
