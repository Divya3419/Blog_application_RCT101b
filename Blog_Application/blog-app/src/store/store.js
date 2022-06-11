import { applyMiddleware, legacy_createStore } from "redux";


export const store=legacy_createStore(applyMiddleware(thunk))