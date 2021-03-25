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
import {RoutesCosntants} from "../util/constants/routes.constants";

export const DrawerContent = (props) => (
    <View style={[FlexStyle.makeFlex(1)]}>
        <DrawerContentScrollView {...props}>
            <View style={[FlexStyle.flexOrientation.flexColumn]}>
                <Drawer.Section style={[MarginStyle.makeMargin(10,0,10,5)]}>
                    <DrawerItem label={'Home'} onPress={() => redirectTo(props.navigation, RoutesCosntants.HOME)}
                                icon={(color, size) => (<Icon name={'home-outline'} color={ColorConstants.VERDE_AGUA} size={25}/>)}
                    />
                    <DrawerItem label={'Cadastrar Usuário'} onPress={() => redirectTo(props.navigation, RoutesCosntants.ADD_USUARIO)}
                                icon={(color, size) => (<Icon name={'plus'} color={ColorConstants.VERDE_AGUA} size={25}/>)}
                    />
                    <DrawerItem label={'Listar Usuário'} onPress={() => redirectTo(props.navigation, RoutesCosntants.LIST_USUARIO)}
                                icon={(color, size) => (<Icon name={'format-list-bulleted'} color={ColorConstants.VERDE_AGUA} size={25}/>)}
                    />
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
    </View>
);

const redirectTo = (navigation, screen) => {
    navigation.navigate(screen);
}
