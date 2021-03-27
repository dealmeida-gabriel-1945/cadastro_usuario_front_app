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

export const SaibaMaisPage = ({navigation}) => (
    <>
        <CustomHeader drawerNavigation={navigation}/>
        <View style={[FlexStyle.makeFlex(1), AlignStyle.centerX, PaddingStyle.makePadding(5,10,5,10)]}>
            <Text style={[TextStyle.makeFontSize(15)]}>Este é o meu app de cadastro de usuários.</Text>
        </View>
    </>
);
