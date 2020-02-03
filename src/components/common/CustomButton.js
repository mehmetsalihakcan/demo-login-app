import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native";

//Screen size
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const CustomButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.title} </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: screenWidth / 3,
    height: screenHeight / 15,
    marginHorizontal: 15,
    borderRadius:5,
    backgroundColor:'orange',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10
    //elevation:0.8
  },
  buttonContainer: {
    width: screenWidth / 2,
    flexDirection: "column"
  },
  text:{
      fontSize:18,
      fontWeight:'bold',
      color:'black'
  }
});

export default CustomButton;