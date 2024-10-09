import { legacy_createStore } from "redux";
import { CounterReducer } from "./Reducer"

export const store = legacy_createStore(CounterReducer);