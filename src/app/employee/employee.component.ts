import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { NgForm, FormControl } from '@angular/forms';
import { employee } from '../data/employee.module';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  
  originalemployee : employee = {
    fname: null,
    lname:null,
    email:null,
    contact:null,
    add:null,
    unm:null,
    pwd:null,
    gender:null,
    qualification:null,
    experience:null,
    languages:[]


  };
  employee : employee={...this.originalemployee};
  qualification: Observable<string[]>;
  experience: Observable<string[]>;
  languages:string[];
 
  

  constructor(private dataService:DataService) { }

  ngOnInit(){
    this.qualification=this.dataService.getQualification();
    this.experience=this.dataService.getExperience();
    this.languages=['C', 'Java', 'CSharp', 'PHP', 'Python'];
   }
   
  
  onSubmit(form : NgForm){
    console.log('in onSubmit:' , form.valid);
    if(form.value.C==true){
      this.employee.languages.push("C/C++");
    }
    if(form.value.Java==true){
      this.employee.languages.push("Java");
    }
    if(form.value.CSharp==true){
      this.employee.languages.push("C#");
    }
    if(form.value.PHP==true){
      this.employee.languages.push("PHP");
    }
    if(form.value.Python==true){
      this.employee.languages.push("Python");
    }
    if(form.valid){
    console.log(this.employee);
    }
  }

}

