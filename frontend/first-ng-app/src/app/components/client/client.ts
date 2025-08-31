import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client';
import { IAPIClientsResponse } from '../../model/interface/roles';
import { Clientclass } from '../../model/class/Client';
import { DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Button } from '../../reusableComponent/button/button';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, Button],
  templateUrl: './client.html',
  styles: ``
})
export class Client implements OnInit {

  currentDate: Date = new Date()
  clientObj = new Clientclass();
  clientList: Clientclass[] = [];
  cs = inject(ClientService)
  cdr = inject(ChangeDetectorRef)

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients() {
    //call service
    this.cs.getAllClients().subscribe((res: IAPIClientsResponse)=>{
      if(res.result){
        this.clientList = res.data;
        this.cdr.detectChanges();
        console.log(this.clientList)
      }else{
        alert(res.message)
      }
    })
  }

  addClient(data: string | Clientclass){
    console.log(data)
    console.log(this.clientObj)
    this.cs.addUpdateClients(this.clientObj).subscribe((res:IAPIClientsResponse)=>{
      if(res.result){
        alert(res.message)
        this.clientList = res.data;
        this.clientObj = new Clientclass();
        this.cdr.detectChanges();
      }else{
        alert(res.message)
      }
    })
  }

  editClient(c:Clientclass){
    this.clientObj = c;
    this.cdr.detectChanges();
  }

  deleteClient(cId: number){
    if(confirm("Are you sure to delete?")){
      this.cs.deleteClients(cId).subscribe((res:IAPIClientsResponse)=>{
        if(res.result){
          alert("Successful")
          this.clientList = res.data;
          this.clientObj = new Clientclass();
          this.cdr.detectChanges();
        }else{
          alert("Not Successful")
        }  
      })
    }
  }

}
