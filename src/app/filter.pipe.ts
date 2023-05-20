// import { Pipe, PipeTransform } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Student } from 'src/src/interfaces/indexx';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students: Student[], balancedstudents:boolean ): any {
    if(!balancedstudents){
      return students.filter(student =>{
        return student.feebalance < 0
      });
    }
    return students.filter(student =>{
      return student.feebalance > 0
    });
  }

}
