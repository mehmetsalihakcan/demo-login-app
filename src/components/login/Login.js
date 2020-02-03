import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView
} from "react-native";

//access redux global state and methods
import { useSelector, useDispatch } from "react-redux";

//import redux metot
import {
  changePhoneNumber,
  changeTcNumber,
  changePassword,
  changePostCode
} from "../../redux/actions/login/loginActions";

//import custom input components
import PhoneNumberInput from "../common/PhoneNumberInput";
import TcNoInput from "../common/TcNoInput";
import PasswordInput from "../common/PasswordInput";
import PostCodeInput from "../common/PostCodeInput";
import CustomButton from "../common/CustomButton";

//get screen size
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Login = () => {
  const globalState = useSelector(state => state.login);
  const dispatch = useDispatch();

  const {
    phoneNumber,
    tcNo,
    password,
    postCode /*  firstName, lastName,ibanNo,educationStatus,dateOfBirth,profilePicture */
  } = globalState;

  const [myPhoneNumber, setMyPhoneNumber] = useState(null); //local state
  const [myTcNumber, setMyTcNumber] = useState(null); //local state
  const [myPassword, setMyPassword] = useState(null); //local state
  const [myPostCode, setMyPostCode] = useState(null); //local state

  const changePhoneNumberHandler = inputText => {
    setMyPhoneNumber(inputText.replace(/[^0-9]/g, ""));
  };

  const changeTcNumberHandler = inputText => {
    setMyTcNumber(inputText.replace(/[^0-9]/g, ""));
  };

  const changePasswordHandler = inputText => {
    setMyPassword(inputText.replace(/[^0-9a-zA-Z]/g, ""));
  };

  const changePostCodeHandler = inputText => {
    setMyPostCode(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setMyPhoneNumber("");
    setMyTcNumber("");
    setMyPassword("");
    setMyPostCode("");
  };

  const confirmInputHandler = useCallback(() => {
    /*
    const chosenNumber = parseInt(myPhoneNumber);
    if (
      isNaN(chosenNumber) ||
      chosenNumber <= 0 ||
      chosenNumber.length > 11 ||
      chosenNumber.length < 11 ||
      chosenNumber.length === "undefined"
    ) {
      Alert.alert("Invalid number!", "Number has to be 11 character.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler }
      ]);
      return;
    }

*/

    dispatch(changePhoneNumber(myPhoneNumber));
    dispatch(changeTcNumber(myTcNumber));
    dispatch(changePassword(myPassword));
    dispatch(changePostCode(myPostCode));

    Keyboard.dismiss();
  }, [dispatch, myPhoneNumber, myTcNumber, myPassword, myPostCode]);

  useEffect(() => {
    console.log("useEffect has been called!");
  }, [myPhoneNumber, myTcNumber, myPassword, myPostCode]); //Değeri değişenler olduğunda çalışacak

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView style={{flex:1,width:'100%'}}>
      <View style={styles.container}>
        <PhoneNumberInput
          value={myPhoneNumber}
          onChangeText={changePhoneNumberHandler}
        />
        <TcNoInput value={myTcNumber} onChangeText={changeTcNumberHandler} />
        <PasswordInput
          value={myPassword}
          onChangeText={changePasswordHandler}
        />
        <PostCodeInput
          value={myPostCode}
          onChangeText={changePostCodeHandler}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <CustomButton title="Reset" onPress={resetInputHandler} />
          </View>
          <View style={styles.button}>
            <CustomButton title="Change Store" onPress={confirmInputHandler} />
          </View>
        </View>
      </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20
  },
  button: {
    marginTop: 10
  },
  buttonContainer: {
    justifyContent: "center",
    width: screenWidth / 2,
    flexDirection: "column",
    flexDirection: "row"
  }
});

export default Login;
