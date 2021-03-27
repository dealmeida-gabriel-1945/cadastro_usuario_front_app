import {combineReducers} from "redux"
import {usuarioReducer} from "./usuario.reducers";

export const rootReducer =  combineReducers({
    usuario: usuarioReducer,
});
