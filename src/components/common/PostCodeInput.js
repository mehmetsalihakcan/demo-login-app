import React from "react";
import { TextInput, StyleSheet } from "react-native";

const PostCodeInput = props => {
  return (
    <TextInput
      {...props}
      style={styles.input}
      keyboardType="number-pad"
      placeholder="Posta Kodu"
      maxLength={5}
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

export default PostCodeInput;
