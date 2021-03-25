import {
    View,
} from "react-native";
import {FlexStyle} from "../style/flex.style";
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {Drawer} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MarginStyle} from "../style/margin.style";
import {ColorConstants} from "../util/constants/color.constants";
import React from 'react';

export const DrawerContent = (props) => (
    <View style={[FlexStyle.makeFlex(1)]}>
        <DrawerContentScrollView {...props}>
            <View style={[FlexStyle.flexOrientation.flexColumn]}>
                <Drawer.Section style={[MarginStyle.makeMargin(10,0,10,5)]}>
                    <DrawerItem label={'Cadastrar Usuário'} onPress={() => redirectTo('HOME')}
                                icon={(color, size) => (<Icon name={'home-outline'} color={ColorConstants.VERDE_AGUA} size={25}/>)}
                    />
                    <DrawerItem label={'Listar Usuário'} onPress={() => redirectTo('AREA')}
                                icon={(color, size) => (<Icon name={'paperclip'} color={ColorConstants.VERDE_AGUA} size={25}/>)}
                    />
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
    </View>
);

const redirectTo = (screen) => {
    this.props.navigation.navigate(screen);
}
