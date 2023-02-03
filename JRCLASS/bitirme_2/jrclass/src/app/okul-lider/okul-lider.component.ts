import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';
import { OkulLider } from '../liderkayit/okulLider';
import { Ogrenci } from '../ogrenci-liste/ogrenci-liste';
import { LiderServiceService } from '../services/lider-service.service';
import { OgrenciservicesGetService } from '../services/ogrenciservices-get.service';

@Component({
  selector: 'app-okul-lider',
  templateUrl: './okul-lider.component.html',
  styleUrls: ['./okul-lider.component.css']
})
export class OkulLiderComponent {
  ogrenciv1: Ogrenci = new Ogrenci();
  ogrenci!: Ogrenci[];

  constructor(private http: HttpClient,
    private apiPost: LiderServiceService) { }

    filterText=""

  ngOnInit() {
    this.http.get<Ogrenci[]>("https://localhost:7245/api/Students").subscribe(data => {
      this.ogrenci = data;
      console.log(data);
      this.ogrenci = data;
    });
  }
  excelExport() {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.ogrenci);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Öğrenciler');

    /* save to file */
    XLSX.writeFile(wb, 'ogrenci-listesi.xlsx');
  }
  fileExcelUpload(file: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(file.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      /* save data */
      const data = <any>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      data.splice(0, 1);
      console.log(data);
      this.onPost(data);
    };
    reader.readAsBinaryString(target.files[0]);
    file.target.value = '';

  }
  postStudent(ogrenciv1: Ogrenci): Observable<Ogrenci> {
    console.log("postStudent Triggered!!!")
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.post<Ogrenci>("https://localhost:7245/api/Students",
      ogrenciv1, httpOptions)
  }
  onPost(_data: Ogrenci[]) {
    this.postStudent(this.ogrenciv1).subscribe(data => {
      this.ogrenciv1 = data;
      console.log()
    })
  }
  deleteStudent(id: number): Observable<Ogrenci> {

    return this.http.delete<Ogrenci>("https://localhost:7245/api/Students" + "/" + id)
  }
  onClear() {
    return this.http.get("https://localhost:7245/api/Students").toPromise().then(res => this.ogrenci = res as Ogrenci[]);
  }
  onDelete(studentID: number) {
    console.log("onDelete Triggered!!!")
    this.deleteStudent(studentID).subscribe(
      res => {
        this.onClear();

      }
    )
  }
updateStudentt(studentID:number):Observable<Ogrenci>{
  return this.http.put<Ogrenci>("https://localhost:7245/api/Students" + "/" + studentID,studentID)

}
onUpdate(ogrenciv1:Ogrenci){
  console.log("updateçalıştı")
  this.updateStudentt(ogrenciv1.studentID).subscribe((ogrenciv1:Ogrenci)=>this.updateStudentt(ogrenciv1.studentID))
}
  onSubmit(form: NgForm) {   
     //this.insertRecord(form);  
    //  this.updateRecord(form);
    // this.onUpdate(this.ogrenciv1); 
    this.insertRecord(form);
   
  }



//Update
  populateForm(selectedRecord: Ogrenci) {
    this.ogrenciv1 = selectedRecord;
  }
  insertRecord(form:NgForm){
    this.apiPost.addStudent(this.ogrenciv1).subscribe(data => {    
      console.log("insert çalıştı")  
      this.resetForm(form);
      
    })
  }
  // updateRecord(form :NgForm){
    // this.updateStudent().subscribe(data => {
    //   console.log("update çalıştı")
    //   this.resetForm(form);
    //   this.onClear();
    //   console.log(data);
    // })


    // this.updateStudent(this.ogrenci).subscribe(
    //   res => {
    //     // this.resetForm(form);
    //     // this.onClear();
    //     console.log(this.ogrenciv1.studentName)
    //   }
    // )
  // }
  // updateStudent(ogrenci:Ogrenci):Observable<Ogrenci[]>{
  //   return this.http.put<Ogrenci[]>(`${"https://localhost:7245/api/Students"}/${this.ogrenciv1.studentID}`,ogrenci)
  // }




  resetForm(form :NgForm){
    form.resetForm();
    this.ogrenciv1=new Ogrenci();
  }

}


