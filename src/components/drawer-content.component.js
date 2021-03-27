import React from 'react';
import {
    View, Image
} from "react-native";
import {FlexStyle} from "../style/flex.style";
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {Drawer} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MarginStyle} from "../style/margin.style";
import {ColorConstants} from "../util/constants/color.constants";
import {RoutesConstants} from "../util/constants/routes.constants";
import {PositionStyle} from "../style/position.style";

export const DrawerContent = (props) => (
    <View style={[FlexStyle.makeFlex(1)]}>
        <DrawerContentScrollView {...props}>
            <View style={[FlexStyle.flexOrientation.flexColumn]}>
                <Drawer.Section style={[MarginStyle.makeMargin(0,10,0, 10), PositionStyle.centralizadoXY]}>
                    <Image
                        source={require('../../assets/devel-code-logo.png')}
                        style={{
                            width: 150,
                            height: 150,
                        }}
                    />
                </Drawer.Section>
                <Drawer.Section style={[MarginStyle.makeMargin(10,0,10,5)]}>
                    <DrawerItem label={'Home'} onPress={() => redirectTo(props.navigation, RoutesConstants.HOME)}
                                icon={(color, size) => (<Icon name={'home-outline'} color={ColorConstants.VERDE_AGUA} size={25}/>)}
                    />
                    <DrawerItem label={'Cadastrar Usuário'} onPress={() => redirectTo(props.navigation, RoutesConstants.ADD_USUARIO)}
                                icon={(color, size) => (<Icon name={'plus'} color={ColorConstants.VERDE_AGUA} size={25}/>)}
                    />
                    <DrawerItem label={'Listar Usuário'} onPress={() => redirectTo(props.navigation, RoutesConstants.LIST_USUARIO)}
                                icon={(color, size) => (<Icon name={'format-list-bulleted'} color={ColorConstants.VERDE_AGUA} size={25}/>)}
                    />
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        <Drawer.Section>
            <DrawerItem label={'Saiba Mais'} onPress={() => redirectTo(props.navigation, RoutesConstants.SAIBA_MAIS)}
                        icon={(color, size) => (<Icon name={'information'} color={ColorConstants.VERDE_AGUA} size={25}/>)}
            />
        </Drawer.Section>
    </View>
);

const redirectTo = (navigation, screen) => {
    navigation.navigate(screen);
}
