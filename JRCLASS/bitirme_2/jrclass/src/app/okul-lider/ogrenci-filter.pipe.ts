import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Ogrenci } from '../ogrenci-liste/ogrenci-liste';

@Pipe({
  name: 'ogrenciFilter'
})
export class OgrenciFilterPipe implements PipeTransform {

  transform(value: Ogrenci[],filterText?: any): Ogrenci[] {

    filterText=filterText?filterText.toLocaleLowerCase():null
    
    return filterText?value.filter((p:Ogrenci)=>p.studentName.toLocaleLowerCase().indexOf(filterText)!==-1):value;    
  }
}
