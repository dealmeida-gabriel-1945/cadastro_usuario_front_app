import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {AppRoutes} from "./src/app.routes";
import {ColorConstants} from "./src/util/constants/color.constants";

export default function App() {
  return (
      <PaperProvider theme={theme}>
        <AppRoutes />
      </PaperProvider>
  );
}
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: ColorConstants.VERDE_AGUA,
    accent: '#fff',
  },
};
