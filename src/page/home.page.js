import React from 'react';
import {
    View, Text, Linking
} from "react-native";
import {FlexStyle} from "../style/flex.style";
import {CustomHeader} from "../components/custom-header.component";
import {AlignStyle} from "../style/align.style";
import {PaddingStyle} from "../style/padding.style";
import {TextStyle} from "../style/text.style";
import {MarginStyle} from "../style/margin.style";

export const HomePage = ({navigation}) => (
    <>
        <CustomHeader drawerNavigation={navigation}/>
        <View style={[FlexStyle.makeFlex(9), AlignStyle.centerX, PaddingStyle.makePadding(5,10,5,10)]}>
            <Text style={[TextStyle.makeFontSize(25), TextStyle.textDecoration.negrito]}>Bem-vindo!</Text>
            <Text style={[TextStyle.makeFontSize(15)]}>Este é o meu app de cadastro de usuários.</Text>
        </View>
        <View style={[FlexStyle.makeFlex(1), AlignStyle.centerX, PaddingStyle.makePadding(5,10,5,10)]}>
            <Text style={[TextStyle.makeFontSize(15), MarginStyle.makeMargin(0,0,0,10)]}>Feito por Gabriel Guimarães de Almeida</Text>
            <Text style={[TextStyle.makeFontSize(13), TextStyle.textColor.azul]} onPress={() => Linking.openURL('https://github.com/dealmeida-gabriel-1945/cadastro_usuario_front_app')}>
                Acesse a página do repositório Github aqui!
            </Text>
        </View>
    </>
);
