import { Component } from '@angular/core';
import { Student } from 'src/interfaces/indexx';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  students: Student[] = [];
  addStudent(id:number, Studentname:string,feebalance:number){
    this.students.push({ id , Studentname, feebalance })
}
}
