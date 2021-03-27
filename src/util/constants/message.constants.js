import {AlertFunction} from "../../components/functions/alert-function.component";
import {AlertOption} from "../../model/alert-option.model";
import {UsuarioService} from "../../service/usuario.service";
import {ErrorHandler} from "../handler/error.handler";

export const MessageConstants = {
    SUCESSO: 'Operação realziada com sucesso!',
    MOSTRAR_MENSAGEM_DE_SUCESSO: () => {
        AlertFunction(
            'Sucesso!', MessageConstants.SUCESSO,
            [
                new AlertOption('OK!')
            ]
        );
    }
};