import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environmentWithAPI';
import { Constant } from '../constant/Constant';
import { IAPITodoResponse } from '../model/interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  http = inject(HttpClient)

  getTodos():Observable<IAPITodoResponse>{
    console.log(environment.API_URL+Constant.API_METHOD.CRUD_TODOS)
    return this.http.get<IAPITodoResponse>(environment.API_URL+Constant.API_METHOD.CRUD_TODOS)
  }
  
}
