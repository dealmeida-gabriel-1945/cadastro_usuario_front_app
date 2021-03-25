import {ApiConstants} from "../util/constants/api.constants";
import axios from "axios";

const BASE_URL_USUARIO = `${ApiConstants.BASE_URL}/usuario`;

export const UsuarioService = {
    addUsuario: (usuario) => (axios.post(BASE_URL_USUARIO, usuario)),
    updateUsuario: (usuario) => (axios.put(`${BASE_URL_USUARIO}/${usuario.id}`, usuario)),
    listUsuario: (pageable) => (axios.get(`${BASE_URL_USUARIO}?size=${pageable.size}&page=${pageable.page}`)),
    deleteUsuario: (id) => (axios.delete(`${BASE_URL_USUARIO}/${id}`)),
}
