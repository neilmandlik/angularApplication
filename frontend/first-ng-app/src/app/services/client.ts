import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAPIClientsResponse } from '../model/interface/roles';
import { environment } from '../../environments/environment';
import { Clientclass } from '../model/class/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  http = inject(HttpClient);

  getAllClients():Observable<IAPIClientsResponse>{
    return this.http.get<IAPIClientsResponse>(environment.API_URL+'clients')
  }

  addUpdateClients(obj:Clientclass):Observable<IAPIClientsResponse>{
    return this.http.post<IAPIClientsResponse>(environment.API_URL+'addupdateclient',obj)
  }

  deleteClients(cId:number):Observable<IAPIClientsResponse>{
    return this.http.delete<IAPIClientsResponse>(environment.API_URL+'deleteclient?clientId='+cId)
  }
}
