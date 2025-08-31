import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAPIClientsResponse, IAPIEmployeesResponse, IAPIClientProjectsResponse } from '../model/interface/roles';
import { environment } from '../../environments/environmentWithAPI';
import { Clientclass } from '../model/class/Client';
import { ClientProjectclass } from '../model/class/ClientProject';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  http = inject(HttpClient);

  addClientProject(obj: ClientProjectclass):Observable<IAPIClientProjectsResponse>{
    return this.http.post<IAPIClientProjectsResponse>(environment.API_URL+'clientProjects',obj)
  }

  getAllClientProjects():Observable<IAPIClientProjectsResponse>{
    console.log(environment.API_URL+'clientProjects')
    return this.http.get<IAPIClientProjectsResponse>(environment.API_URL+'clientProjects')
  }

  getAllEmployees():Observable<IAPIEmployeesResponse>{
    console.log(environment.API_URL+'employees')
    return this.http.get<IAPIEmployeesResponse>(environment.API_URL+'employees')
  }

  getAllClients():Observable<IAPIClientsResponse>{
    return this.http.get<IAPIClientsResponse>(environment.API_URL+'clients')
  }

  addUpdateClients(obj:Clientclass):Observable<IAPIClientsResponse>{
    return this.http.post<IAPIClientsResponse>(environment.API_URL+'addclient',obj)
  }

  deleteClients(cId:number):Observable<IAPIClientsResponse>{
    return this.http.delete<IAPIClientsResponse>(environment.API_URL+'deleteclient/'+cId)
  }
}
