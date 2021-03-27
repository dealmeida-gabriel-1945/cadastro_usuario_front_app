import {ActionsConstants} from "../../../util/constants/actions.contants";

const ACTIONS = ActionsConstants.USUARIO;

export const usuarioReducer = (state = {}, action) =>{
    switch (action.type) {
        case ACTIONS.UPDATE:
            const {usuario} = action;
            return {...state, usuario}
        case ACTIONS.EDIT:
            const {usuarioEdit} = action;
            return {...state, usuarioEdit}
        default:
            return state;
    }
};
