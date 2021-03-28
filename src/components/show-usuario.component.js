import React from "react";
import {Avatar, IconButton, Modal, Portal} from "react-native-paper";
import {Text, View} from "react-native";
import {updateUsuario} from "../service/redux/actions/usuario.action";
import {connect} from "react-redux";
import {PositionStyle} from "../style/position.style";
import {FlexStyle} from "../style/flex.style";
import {MarginStyle} from "../style/margin.style";
import {AppUtil} from "../util/app.util";
import {TextStyle} from "../style/text.style";
import {ColorConstants} from "../util/constants/color.constants";
import {AlertFunction} from "./functions/alert-function.component";
import {AlertOption} from "../model/alert-option.model";
import {UsuarioService} from "../service/usuario.service";
import {MessageConstants} from "../util/constants/message.constants";
import {ErrorHandler} from "../util/handler/error.handler";
import {updateUsuarioEdit} from "../service/redux/actions/usuario-edit.action";
import {RoutesConstants} from "../util/constants/routes.constants";

const ShowUsuario = ({
    usuario = null, navigation, onDelete = () => {},
     dispatchUpdateUsuario, dispatchUpdateUsuarioEdit,
}) => {
    return(
        <Portal>
            <Modal visible={!!usuario.usuario} onDismiss={() => dispatchUpdateUsuario(null)} contentContainerStyle={{backgroundColor: 'white', padding: 20}}>
                <View style={PositionStyle.centralizadoX}>
                    <Avatar.Image
                        source={montaImagem(usuario.usuario?.foto)}
                        size={150}
                    />
                </View>
                <View style={[FlexStyle.flexOrientation.flexRow, MarginStyle.makeMargin(0,10,0,0)]}>
                    <View style={[FlexStyle.makeFlex(1), PositionStyle.centralizadoX]}>
                        <Text style={TextStyle.makeFontSize(18)}>{usuario.usuario?.nome}</Text>
                    </View>
                    <View style={[FlexStyle.makeFlex(1), PositionStyle.centralizadoX]}>
                        <Text style={TextStyle.makeFontSize(18)}>
                            {AppUtil.FORMATA_DATA(new Date(usuario.usuario?.dataNascimento))}
                        </Text>
                    </View>
                </View>
                <View style={[FlexStyle.flexOrientation.flexRow, MarginStyle.makeMargin(0,10,0,0)]}>
                    <View style={[FlexStyle.makeFlex(1), PositionStyle.centralizadoXY]}>
                        <IconButton
                            icon="arrow-left"
                            color={ColorConstants.VERDE_AGUA}
                            size={30}
                            onPress={() => dispatchUpdateUsuario(null)}
                        />
                    </View>
                    <View style={[FlexStyle.makeFlex(1), PositionStyle.centralizadoXY]}>
                        <IconButton
                            icon="account-edit"
                            color={ColorConstants.AMARELO}
                            size={30}
                            onPress={() => {
                                dispatchUpdateUsuarioEdit(usuario.usuario)
                                dispatchUpdateUsuario(null)
                                navigation.navigate(RoutesConstants.EDIT_USUARIO)
                            }}
                        />
                    </View>
                    <View style={[FlexStyle.makeFlex(1), PositionStyle.centralizadoXY]}>
                        <IconButton
                            icon="delete"
                            color={ColorConstants.VERMELHO}
                            size={30}
                            onPress={() => deleteUser(usuario.usuario?.id, dispatchUpdateUsuario, onDelete)}
                        />
                    </View>
                </View>
            </Modal>
        </Portal>
    );
}

const myMapDispatchToProps ={
    dispatchUpdateUsuario: updateUsuario,
    dispatchUpdateUsuarioEdit: updateUsuarioEdit,
};
const mapStateToProps = state => {
    const {usuario} = state;
    return {usuario};
}
export default connect(mapStateToProps, myMapDispatchToProps)(ShowUsuario);

const montaImagem = (base64) => {
    return (!base64 || (base64.length === 0))
        ? require('../../assets/stock-user-photo.png')
        : {uri: `data:image/png;base64,${base64}`};
}

const deleteUser = (id, exit, onDelete) => {
    AlertFunction(
        'Atenção', 'Você deseja remover este usuário?',
        [
            new AlertOption('Não'),
            new AlertOption('Sim', () => {
                UsuarioService.deleteUsuario(id)
                    .then(res => {
                        MessageConstants.MOSTRAR_MENSAGEM_DE_SUCESSO();
                        exit(null);
                        onDelete();
                    }).catch(erro => alert(ErrorHandler.getMessage(erro)))
            })
        ]
    );
}
