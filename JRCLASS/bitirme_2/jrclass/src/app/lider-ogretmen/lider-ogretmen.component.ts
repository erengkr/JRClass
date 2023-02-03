import { Component } from '@angular/core';
import { Ogretmen } from '../ogretmen-kayit/ogretmen';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { OgretmengetService } from '../services/ogretmenget.service';

@Component({
  selector: 'app-lider-ogretmen',
  templateUrl: './lider-ogretmen.component.html',
  styleUrls: ['./lider-ogretmen.component.css']
})
export class LiderOgretmenComponent {
  constructor(private http: HttpClient,
    private apiGet:OgretmengetService){}

  ogretmen:Ogretmen =new Ogretmen();
  ogretmenv1!:Ogretmen[];

  filterText=""
  excelExport() {
   
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.ogretmenv1);
  
   
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Öğretmenler');  
   
    XLSX.writeFile(wb, 'ogretmen-listesi.xlsx');
  } 

ngOnInit() {
  this.http.get<Ogretmen[]>("https://localhost:7245/api/Teaches").subscribe(data => {
    this.ogretmenv1 = data;
    console.log(data);
    this.ogretmenv1 = data;
  });
}
}
