import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAPIClientsResponse, IAPIEmployeesResponse, IAPIClientProjectsResponse } from '../model/interface/roles';
import { environment } from '../../environments/environmentWithAPI';
import { Clientclass } from '../model/class/Client';
import { ClientProjectclass } from '../model/class/ClientProject';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  http = inject(HttpClient);

  addClientProject(obj: ClientProjectclass){
    return this.http.post<ClientProjectclass[]>(environment.API_URL+Constant.API_METHOD.CRUD_CLIENT_PROJECTS,obj)
  }

  getAllClientProjects(){
    console.log(environment.API_URL+'clientProjects')
    return this.http.get<ClientProjectclass[]>(environment.API_URL+Constant.API_METHOD.CRUD_CLIENT_PROJECTS)
  }

  getAllEmployees():Observable<IAPIEmployeesResponse>{
    console.log(environment.API_URL+'employees')
    return this.http.get<IAPIEmployeesResponse>(environment.API_URL+Constant.API_METHOD.CRUD_EMPLOYEES)
  }

  getAllClients():Observable<IAPIClientsResponse>{
    return this.http.get<IAPIClientsResponse>(environment.API_URL+Constant.API_METHOD.CRUD_CLIENTS)
  }

  addUpdateClients(obj:Clientclass):Observable<IAPIClientsResponse>{
    return this.http.post<IAPIClientsResponse>(environment.API_URL+Constant.API_METHOD.CRUD_CLIENTS,obj)
  }

  deleteClients(cId:number):Observable<IAPIClientsResponse>{
    return this.http.delete<IAPIClientsResponse>(environment.API_URL+Constant.API_METHOD.CRUD_CLIENTS+`/${cId}`)
  }
}
