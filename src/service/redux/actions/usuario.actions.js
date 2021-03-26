import {ActionsConstants} from "../../../util/constants/actions.contants";

export const updateUsuario = (usuario) => ({
    type: ActionsConstants.USUARIO.UPDATE,
    usuario,
});

