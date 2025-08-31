import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  clientProjectList: ClientProjectclass[] = []

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
        this.clientProjectList = res.data
        this.cdr.detectChanges()
      }
      else{
        alert("Unsuccessful")
      }
    })
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
      this.cs.addClientProject(cliPrObj).subscribe((res: IAPIClientProjectsResponse)=>{
        if(res.result){
          this.clientProjectList = res.data
          console.log(this.clientProjectList)
          this.cdr.detectChanges()
        }else{
          alert('Únsuccessful')
        }
      })
    }

  }

}
