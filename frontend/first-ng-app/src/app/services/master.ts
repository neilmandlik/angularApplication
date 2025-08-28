import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);

  getDesignations(){
    return this.http.get('http://localhost:4202/api/designations')
  }
  
}
