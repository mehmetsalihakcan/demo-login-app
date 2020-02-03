import React from "react";
import { StyleSheet, TextInput } from "react-native";

const PasswordInput = props => {
  return (
    <TextInput
      {...props}
      style={styles.input}
      placeholder="Şifre Giriniz"
      secureTextEntry={true}
      keyboardType="default"
      maxLength={25}
      //multiline="false"
      blurOnSubmit
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    marginVertical:10,
    width: 200,
    height:50,
    textAlign: "center",
    borderColor: "red",
    borderWidth: 2,
    
    borderBottomRightRadius:10,
    borderTopLeftRadius:10,
    fontSize: 20
  }
});

export default PasswordInput;
