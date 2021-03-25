import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {AppRoutes} from "./src/app.routes";
import {ColorConstants} from "./src/util/constants/color.constants";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./src/service/redux/reducers/index.reducers";

//criacao da store
const store = createStore(rootReducer);

export default function App() {
  return (
      <Provider store={store}>
          <PaperProvider theme={theme}>
            <AppRoutes />
          </PaperProvider>
      </Provider>
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
