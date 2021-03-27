import React from 'react';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {HomePage} from "./page/home.page";
import {NavigationContainer} from "@react-navigation/native";
import {DrawerContent} from "./components/drawer-content.component";
import {RoutesConstants} from "./util/constants/routes.constants";
import UsuarioListPage from "./page/usuario/usuario-list.page";
import {UsuarioFormPage} from "./page/usuario/usuario-form.page";
import UsuarioEditPage from "./page/usuario/usuario-edit.page";
import {SaibaMaisPage} from "./page/saiba-mais.page";


const Drawer = createDrawerNavigator();
export const AppRoutes = () => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="HOME" drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name={RoutesConstants.HOME} component={HomePage} />
            <Drawer.Screen name={RoutesConstants.LIST_USUARIO} component={UsuarioListPage} />
            <Drawer.Screen name={RoutesConstants.ADD_USUARIO} component={UsuarioFormPage} />
            <Drawer.Screen name={RoutesConstants.EDIT_USUARIO} component={UsuarioEditPage} />
            <Drawer.Screen name={RoutesConstants.SAIBA_MAIS} component={SaibaMaisPage} />
        </Drawer.Navigator>
    </NavigationContainer>
);
