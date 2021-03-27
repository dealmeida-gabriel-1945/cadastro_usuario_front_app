import {ActionsConstants} from "../../../util/constants/actions.contants";

export const updateUsuarioEdit = (usuarioEdit) => ({
    type: ActionsConstants.USUARIO.EDIT,
    usuarioEdit,
});