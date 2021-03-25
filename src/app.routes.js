import React from 'react';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {HomePage} from "./page/home.page";
import {NavigationContainer} from "@react-navigation/native";
import {DrawerContent} from "./components/drawer-content.component";
import {RoutesCosntants} from "./util/constants/routes.constants";
import UsuarioListPage from "./page/usuario/usuario-list.page";


const Drawer = createDrawerNavigator();
export const AppRoutes = () => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="HOME" drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name={RoutesCosntants.HOME} component={HomePage} />
            <Drawer.Screen name={RoutesCosntants.LIST_USUARIO} component={UsuarioListPage} />
        </Drawer.Navigator>
    </NavigationContainer>
);
