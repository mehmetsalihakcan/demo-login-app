import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./src/redux/reducers/configureStore";
import Header from "./src/components/common/Header";

const store = configureStore();

import Login from "./src/components/login/Login";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header style={styles.formTitle} title="Header Kısmı" />
        <Login />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  formTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginVertical: 15
  }
});
