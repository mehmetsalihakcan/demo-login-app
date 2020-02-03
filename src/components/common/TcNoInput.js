import React from "react";
import { StyleSheet, TextInput } from "react-native";

const TcNoInput = props => {
  return (
    <TextInput
      {...props}
      style={styles.input}
      maxLength={11}
      // autoFocus={true}
      keyboardType="number-pad"
      placeholder="Tc No"
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
   
    textAlign: "center",
    borderColor: "red",
    borderWidth: 2,
  
    borderBottomRightRadius:10,
    borderTopLeftRadius:10,
    fontSize: 20
  }
});

export default TcNoInput;
