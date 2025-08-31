import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employeeclass } from '../../model/class/Employee';
import { Clientclass } from '../../model/class/Client';
import { ClientService } from '../../services/client';
import { IAPIClientsResponse, IAPIEmployeesResponse } from '../../model/interface/roles';
import { ClientProjectclass } from '../../model/class/ClientProject';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl:'./client-project.html',
  styles: ``
})


export class ClientProject implements OnInit {

  cs = inject(ClientService)
  cdr = inject(ChangeDetectorRef)


  empList: Employeeclass[] = []
  clientList = signal<Clientclass[]>([])
  clientProjectList$: Observable<ClientProjectclass[]> = new Observable<ClientProjectclass[]>

  //signal Basics
  firstName = signal("Hello World")

  projectForm: FormGroup = new FormGroup({
    empId: new FormControl(""),
    projectName: new FormControl("",[Validators.required,Validators.minLength(4)]),
    projectDetails: new FormControl(""),
    clientName: new FormControl(""),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl("")
  })

  ngOnInit(): void {

    this.cs.getAllClients().subscribe((res: IAPIClientsResponse)=>{
      if(res.result){        
        this.clientList = signal<Clientclass[]>(res.data)
      }
      else{
        alert("Unsuccessful")
      }
    })

    this.cs.getAllEmployees().subscribe((res: IAPIEmployeesResponse)=>{
      if(res.result){        
        this.empList = res.data
      }
      else{
        alert("Unsuccessful")
      }
    })

    this.getClientProjects()
  }

  onSaveClientProject(){
    const formValue = this.projectForm.value
    console.log(formValue)
    const empDetails: Employeeclass | undefined= this.empList.find(ele => ele.empId === parseInt(formValue.empId))
    console.log(empDetails)
    if(empDetails){
      const {role,...rest} = empDetails
      const cliPrObj = new ClientProjectclass({...rest,...formValue})
      console.log(cliPrObj)
      this.clientProjectList$ = this.cs.addClientProject(cliPrObj)
      this.cdr.detectChanges()
    }

  }

  changeSignal(){
    this.firstName.set("Hello Universe")
  }

  getClientProjects(){
    this.clientProjectList$ = this.cs.getAllClientProjects()
    this.cdr.detectChanges()
  }

}
