import React from "react";
import {
    Header,
    Left,
    Body,
} from "native-base";
import {ColorConstants} from "../util/constants/color.constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {PaddingStyle} from "../style/padding.style";

export const CustomHeader = ({drawerNavigation}) => (

    <Header style={myStyle} androidStatusBarColor={ColorConstants.PRETO}>
        <Left>
            <Icon name="menu" color={ColorConstants.BRANCO} size={25} onPress={() => drawerNavigation.toggleDrawer()}/>
        </Left>
        <Body style={[PaddingStyle.makePadding(100,0,0,0)]} />
    </Header>
);
const myStyle = {
    backgroundColor: ColorConstants.VERDE_AGUA,
};
