import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { TodosStore } from '../../store/todoStore';
import { TodosService } from '../../services/todos';
import { IAPITodoResponse } from '../../model/interface/todo';
import { Todo } from '../../model/class/Todos';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [AsyncPipe],
  templateUrl:'./todos.html',
  styles: ``
})
export class Todos implements OnInit {

  store = inject(TodosStore)
  ts = inject(TodosService)
  cdr = inject(ChangeDetectorRef)
  fb = inject(FormBuilder)

  todoList$: Observable<Todo[]> = new Observable<Todo[]> 

  ngOnInit(): void {
    const todoForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(4)]]
    })
    this.todoList$ = this.ts.getTodos().pipe(
      map((res: IAPITodoResponse)=>res.todos)
    )      
  }    

}
