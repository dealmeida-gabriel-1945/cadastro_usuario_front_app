import React from "react";
import {Alert} from "react-native";

export const AlertFunction = (
  titulo, mensagem,
  opcoes = [
      {text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
      {text: "OK", onPress: () => console.log("OK Pressed") }
  ]
) => {
    Alert.alert(
        titulo,
        mensagem,
        opcoes
    );
}
