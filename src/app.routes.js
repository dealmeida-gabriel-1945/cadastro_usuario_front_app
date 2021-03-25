import React from 'react';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {HomePage} from "./page/home.page";
import {NavigationContainer} from "@react-navigation/native";
import {DrawerContent} from "./components/drawer-content.component";


const Drawer = createDrawerNavigator();
export const AppRoutes = () => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="HOME" drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="HOME" component={HomePage} />
        </Drawer.Navigator>
    </NavigationContainer>
);
