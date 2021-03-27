import {ActionsConstants} from "../../../util/constants/actions.contants";

export const updateUsuarioFoto = (usuarioFoto) => ({
    type: ActionsConstants.USUARIO.EDIT,
    usuarioFoto,
});