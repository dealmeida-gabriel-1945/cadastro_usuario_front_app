import {ActionsConstants} from "../../util/constants/actions.contants";

export const updateUsuarios = (usuarios) => ({
    type: ActionsConstants.USUARIO.UPDATE,
    usuarios,
});

