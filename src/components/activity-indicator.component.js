import React from "react";
import {Text, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import {PositionStyle} from "../style/position.style";
import {FlexStyle} from "../style/flex.style";
import {MarginStyle} from "../style/margin.style";
import {TextStyle} from "../style/text.style";

export const ActivityIndicatorComponent = ({frase = 'Carregando'}) => (
    <View style={[FlexStyle.makeFlex(1), PositionStyle.centralizadoXY]}>
        <View style={MarginStyle.makeMargin(10,10,10,10)}>
            <ActivityIndicator size={'large'}/>
        </View>
        <View style={MarginStyle.makeMargin(10,10,10,10)}>
            <Text style={TextStyle.makeFontSize(20)}>{frase}</Text>
        </View>
    </View>
);
