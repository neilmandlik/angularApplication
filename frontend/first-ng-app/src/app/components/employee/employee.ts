import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ClientService } from '../../services/client';
import { Employeeclass } from '../../model/class/Employee';
import { IAPIEmployeesResponse } from '../../model/interface/roles';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styles: ``
})
export class Employee implements OnInit {

  http = inject(HttpClient)
  cs = inject(ClientService)
  cdr = inject(ChangeDetectorRef)

  empObj = new Employeeclass();
  empList: Employeeclass[] = [];


  ngOnInit(): void {
      this.getEmployees()
  }

  getEmployees(){
    this.cs.getAllEmployees().subscribe((res: IAPIEmployeesResponse)=>{
      if(res.result){
        this.empList=res.data;
        this.cdr.detectChanges()
        console.log(this.empList)
      }else{
        alert(res.message)
      }
    })        
  }

}
