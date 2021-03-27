import React from "react";
import {
    View,
} from "react-native";
import {FlexStyle} from "../style/flex.style";
import {MarginStyle} from "../style/margin.style";
import {ColorConstants} from "../util/constants/color.constants";
import {Button} from "react-native-paper";

export const EndForm = ({
     isCancel = true, onCancel = () => null, onCancelLabel = 'Voltar', onCancelIcon = 'cancel',
     isWipeOut = true, onWipeOut = () => null, onWipeOutLabel = 'Limpar', onWipeOutIcon = 'alert',
     isSubmit = true, onSubmit = () => null, onSubmitLabel = 'Próximo', onSubmitIcon = 'login',
 }) => (

    <View style={[FlexStyle.makeFlex(1), FlexStyle.flexOrientation.flexRow]}>
        {(isCancel) ? renderCancel(onCancel, onCancelLabel, onCancelIcon) : null}
        {(isWipeOut) ? renderWipeOut(onWipeOut, onWipeOutLabel, onWipeOutIcon) : null}
        {(isSubmit) ? renderSubmit(onSubmit, onSubmitLabel, onSubmitIcon) : null}
    </View>
);
const renderCancel = (onClick, label, icon) => (
    <View style={[FlexStyle.makeFlex(1), MarginStyle.makeMargin(5,5,5,5)]}>
        <Button icon={icon} mode="contained" onPress={() => onClick()} color={ColorConstants.VERMELHO}>
            {label}
        </Button>
    </View>
);
const renderWipeOut = (onClick, label, icon) => (
    <View style={[FlexStyle.makeFlex(1), MarginStyle.makeMargin(5,5,5,5)]}>
        <Button icon={icon} mode="contained" onPress={() => onClick()} color={ColorConstants.AMARELO}>
            {label}
        </Button>
    </View>
);
const renderSubmit = (onClick, label, icon) => (
    <View style={[FlexStyle.makeFlex(1), MarginStyle.makeMargin(5,5,5,5)]}>
        <Button icon={icon} mode="contained" onPress={() => onClick()} color={ColorConstants.VERDE_ESCURO}>
            {label}
        </Button>
    </View>
);
