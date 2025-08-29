import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client';
import { IAPIClientsResponse } from '../../model/interface/roles';
import { Clientclass } from '../../model/class/Client';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.html',
  styles: ``
})
export class Client implements OnInit {

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
}
