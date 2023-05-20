import { Injectable } from '@angular/core';
import { Student } from 'src/interfaces/indexx';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  students:Student[]=[
    {
    id:1,
    Studentname:'Jamy Robinson',
    feebalance:25000
    },
    {
      id:2,
      Studentname:'Wambui Karanaja',
      feebalance:2000
      },
      
    {
      id:3,
      Studentname:'Joka',
      feebalance:-20
      },
      {
        id:4,
        Studentname:'Gladys',
        feebalance:-10
        }
  ]

  getStudents():Student[]{
    return this.students
  }

  addStudent(newStudent:Student){
    this.students.push(newStudent)
  }
}
