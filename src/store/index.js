import { createStore, combineReducers } from "redux";

import reducerCounter from "./modules/Counter/reducer";

const reducers = combineReducers({ counter: reducerCounter })

const store = createStore(reducers)

export default store;