import React from "react";
import {Avatar, IconButton, Modal, Portal} from "react-native-paper";
import {Text, View} from "react-native";
import {updateUsuario} from "../service/redux/actions/usuario.actions";
import {connect} from "react-redux";
import {PositionStyle} from "../style/position.style";
import {FlexStyle} from "../style/flex.style";
import {MarginStyle} from "../style/margin.style";
import {AppUtil} from "../util/app.util";
import {TextStyle} from "../style/text.style";
import {ColorConstants} from "../util/constants/color.constants";

const ShowUsuario = ({
    usuario = null, dispatchUpdateUsuario
}) => {
    return(
        <Portal>
            <Modal visible={!!usuario.usuario} onDismiss={() => dispatchUpdateUsuario(null)} contentContainerStyle={{backgroundColor: 'white', padding: 20}}>
                <View style={PositionStyle.centralizadoX}>
                    <Avatar.Image
                        source={{uri: `data:image/png;base64,${usuario.usuario?.foto}`}}
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
                            onPress={() => console.log('Pressed')}
                        />
                    </View>
                    <View style={[FlexStyle.makeFlex(1), PositionStyle.centralizadoXY]}>
                        <IconButton
                            icon="delete"
                            color={ColorConstants.VERMELHO}
                            size={30}
                            onPress={() => console.log('Pressed')}
                        />
                    </View>
                </View>
            </Modal>
        </Portal>
    );
}

const myMapDispatchToProps ={
    dispatchUpdateUsuario: updateUsuario,
};
const mapStateToProps = state => {
    const {usuario} = state;
    return {usuario : usuario};
}
export default connect(mapStateToProps, myMapDispatchToProps)(ShowUsuario);
