import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Employeeclass } from '../../model/class/Employee';
import { Clientclass } from '../../model/class/Client';
import { ClientService } from '../../services/client';
import { IAPIClientProjectsResponse, IAPIClientsResponse, IAPIEmployeesResponse } from '../../model/interface/roles';
import { ClientProjectclass } from '../../model/class/ClientProject';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl:'./client-project.html',
  styles: ``
})
export class ClientProject implements OnInit {

 cs = inject(ClientService)
 cdr = inject(ChangeDetectorRef)

  empList: Employeeclass[] = []
  clientList: Clientclass[]=[]
  clientPriojectList: ClientProjectclass[] = []

  projectForm: FormGroup = new FormGroup({
    empName: new FormControl(""),
    empDesg: new FormControl(""),
    projectName: new FormControl(""),
    projectDetails: new FormControl(""),
    clientName: new FormControl(""),
    startDate: new FormControl(""),
    endDate: new FormControl("")
  })

  ngOnInit(): void {

    this.cs.getAllClients().subscribe((res: IAPIClientsResponse)=>{
      if(res.result){        
        this.clientList = res.data
        this.cdr.detectChanges()
      }
      else{
        alert("Unsuccessful")
      }
    })

    this.cs.getAllEmployees().subscribe((res: IAPIEmployeesResponse)=>{
      if(res.result){        
        this.empList = res.data
        this.cdr.detectChanges()
      }
      else{
        alert("Unsuccessful")
      }
    })

    this.cs.getAllClientProjects().subscribe((res: IAPIClientProjectsResponse)=>{
      if(res.result){        
        this.clientPriojectList = res.data
        this.cdr.detectChanges()
      }
      else{
        alert("Unsuccessful")
      }
    })
  }

}
