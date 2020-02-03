import React from "react";
import { StyleSheet, TextInput } from "react-native";

const PhoneNumberInput = props => {
  return (
    <TextInput
      {...props}
      maxLength={11}
      keyboardType="number-pad"
      style={styles.input}
      placeholder="Telefon No"
      // multiline="false"
      blurOnSubmit
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height:50,
    marginVertical:10,
    textAlign: "center",
    borderColor: "red",
    borderWidth: 2,
    borderBottomRightRadius:10,
    borderTopLeftRadius:10,
    fontSize: 20
  }
});
export default PhoneNumberInput;
