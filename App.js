import React from 'react';
import { View } from 'react-native';
import { Provider } from "react-redux";
import store from "./src/store.js";
import Buscador from "./src/components/Buscador/Buscador.js";

export default function App() {
  console.log("app");
  return (
    <Provider store={store}>
      <View>
      <Buscador/>
      </View>
    </Provider>
  );
}

