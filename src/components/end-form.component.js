import React from "react";
import {
    View,
} from "react-native";
import {FlexStyle} from "../style/flex.style";
import {MarginStyle} from "../style/margin.style";
import {ColorConstants} from "../util/constants/color.constants";
import {Button} from "react-native-paper";

export const EndForm = ({
     isCancel = true, onCancel = () => null,
     isWipeOut = true, onWipeOut = () => null,
     isSubmit = true, onSubmit = () => null,
 }) => (

    <View style={[FlexStyle.makeFlex(1), FlexStyle.flexOrientation.flexRow]}>
        {(isCancel) ? renderCancel(onCancel) : null}
        {(isWipeOut) ? renderWipeOut(onWipeOut) : null}
        {(isSubmit) ? renderSubmit(onSubmit) : null}
    </View>
);
const renderCancel = (onClick) => (
    <View style={[FlexStyle.makeFlex(1), MarginStyle.makeMargin(5,5,5,5)]}>
        <Button icon="cancel" mode="contained" onPress={() => onClick()} color={ColorConstants.VERMELHO}>
            Voltar
        </Button>
    </View>
);
const renderWipeOut = (onClick) => (
    <View style={[FlexStyle.makeFlex(1), MarginStyle.makeMargin(5,5,5,5)]}>
        <Button icon="alert" mode="contained" onPress={() => onClick()} color={ColorConstants.AMARELO}>
            Limpar
        </Button>
    </View>
);
const renderSubmit = (onClick) => (
    <View style={[FlexStyle.makeFlex(1), MarginStyle.makeMargin(5,5,5,5)]}>
        <Button icon="login" mode="contained" onPress={() => onClick()} color={ColorConstants.VERDE_ESCURO}>
            Próximo
        </Button>
    </View>
);
