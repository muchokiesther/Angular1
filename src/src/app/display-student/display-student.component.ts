import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from 'src/interfaces/indexx';
@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {
ngOnInit(): void {
  this.students = this.studentService.getStudents()
}
students: Student [] = [];
constructor(private studentService:StudentsService){

}


}
