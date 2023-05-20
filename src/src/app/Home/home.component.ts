import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
//gave it a decorator
@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styles:[
        `
        h1{
            color:red
        }
        `
    ]
    
})

export class HomeComponent{
   
    users:{name:string, age:number}[]=[
        {
            name:"esther wamuyu",
            age:20
        }
    ]
    search =""
    price=1879212
    date = new Date()
    tmessage ="ipsum dolor sit amet, consectetur adipisicing elit. "
    addStudent(name:string,age:string){
        this.users.push({name, age:+age})
    }
    deleteUser(i:number){
        this.users.splice(i,1)
    }



}
 //creating a component manually
// export class HomeComponent{
// message:string='Angular is okay'
//   enable a button
// showBtn=false  
// constructor(){
//     setTimeout(()=>{
          //disable button
//         this.showBtn=true 
//     },3000)
// }
//  //only happens when button is clicked
//  changeMessage(){ 
//     this.message='Welcome to angular!!'
// }

// getInput(event:Event){
// let value = (event.target as HTMLInputElement).value
// this.message=value
// }
// }
