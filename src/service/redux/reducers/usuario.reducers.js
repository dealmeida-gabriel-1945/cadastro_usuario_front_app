import {ActionsConstants} from "../../../util/constants/actions.contants";

const ACTIONS = ActionsConstants.USUARIO;

export const usuarioReducer = (state = {}, action) =>{
    switch (action.type) {
        case ACTIONS.UPDATE:
            const {usuario} = action;
            console.log(usuario)
            return {...state, usuario}
        default:
            return state;
    }
};
