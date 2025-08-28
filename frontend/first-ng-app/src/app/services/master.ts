import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAPIDesignationsResponse, IAPIRolesResponse } from '../model/interface/roles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);

  getRoles():Observable<IAPIRolesResponse>{
    return this.http.get<IAPIRolesResponse>('http://localhost:4202/api/roles')
  }

  getDesignations():Observable<IAPIDesignationsResponse>{
    return this.http.get<IAPIDesignationsResponse>('http://localhost:4202/api/designations')
  }
  
}
