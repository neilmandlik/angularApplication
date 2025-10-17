import { patchState, signalStore, withMethods, withState } from "@ngrx/signals"
import { IAPITodoResponse, TodosState } from "../model/interface/todo"
import { inject } from "@angular/core"
import { TodosService } from "../services/todos"
import { FormGroup } from "@angular/forms"

const initialTodoState: TodosState = {
    todoForm: new FormGroup({}),
    todos: [],
    loading: false,
    filter: "all"
}

export const TodosStore = signalStore(
    {providedIn: 'root'},
    withState(initialTodoState),
    withMethods()

)


