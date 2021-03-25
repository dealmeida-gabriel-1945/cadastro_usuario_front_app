import {ActionsConstants} from "../../../util/constants/actions.contants";

const ACTIONS = ActionsConstants.USUARIOS;

export const usuarioReducer = (state = {}, action) =>{
    switch (action.type) {
        case ACTIONS.UPDATE:
            const {usuarios} = action;
            return {...state, usuarios}
        default:
            return state;
    }
};
