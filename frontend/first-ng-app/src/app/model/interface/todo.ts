import { FormGroup } from "@angular/forms"
import { Todo } from "../class/Todos"

export type todosFilter= 'all'|'pending'|'completed'

export interface IAPITodoResponse{
    todos: Todo[]
}

export interface TodosState extends IAPITodoResponse{
    loading: boolean,
    filter: todosFilter,
    todoForm: FormGroup
}

