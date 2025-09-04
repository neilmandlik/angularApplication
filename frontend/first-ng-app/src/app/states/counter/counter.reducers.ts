import { createReducer, on } from "@ngrx/store";
import { CounterState } from "../../model/interface/StateManagement";
import { decrement, increment, reset } from "./counter.actions";


export const initialCounterstate: CounterState = {
    counter: 0
}

export const counterReducer = createReducer(
    initialCounterstate,
    on(increment, s=>({...s,counter: s.counter+1})),
    on(decrement, s=>({...s,counter: s.counter-1})),
    on(reset, s=>({...s,counter: 0}))
)