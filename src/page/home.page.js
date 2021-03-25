import React from 'react';
import {
    View, Text
} from "react-native";
import {FlexStyle} from "../style/flex.style";
import {CustomHeader} from "../components/custom-header.component";

export const HomePage = ({navigation}) => (
    <View style={FlexStyle.makeFlex(1)}>
        <CustomHeader drawerNavigation={navigation}/>
    </View>
);
