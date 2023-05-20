import { Component } from '@angular/core';
import { Student } from 'src/interfaces/indexx';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  students: Student[] = [];
  constructor(private studentService:StudentsService){

  }
  addStudent(id:string, Studentname:string,feebalance:string){
    this.studentService.addStudent({ id:+id , Studentname, feebalance:+feebalance })
    console.log(id)
}
}
