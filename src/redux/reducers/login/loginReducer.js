import * as actionTypes from "../../actions/actionTypes";
import InitialState from "../initialState";

const changeLoginFormReducer = (state = InitialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.CHANGE_PHONE_NUMBER:
      console.log("phoneNumber : " + action.payload);
      return (newState = {
        ...state,
        phoneNumber: action.payload
      });

    case actionTypes.CHANGE_TC_NO:
      console.log("tcNo : " + action.payload);
      return (newState = {
        ...state,
        tcNo: action.payload
      });

    case actionTypes.CHANGE_PASSWORD:
      console.log("password : " + action.payload);
      return (newState = {
        ...state,
        password: action.payload
      });

    case actionTypes.CHANGE_POST_CODE:
      console.log("postCode : " + action.payload);
      return (newState = {
        ...state,
        postCode: action.payload
      });

    case actionTypes.CHANGE_FIRST_NAME:
      //console.log("firstName : " + action.payload);
      return (newState = {
        ...state,
        firstName: action.payload
      });

    case actionTypes.CHANGE_LAST_NAME:
      //console.log("lastName : " + action.payload);
      return (newState = {
        ...state,
        lastName: action.payload
      });

    case actionTypes.CHANGE_IBAN_NO:
     // console.log("ibanNo : " + action.payload);
      return (newState = {
        ...state,
        ibanNo: action.payload
      });

    case actionTypes.CHANGE_EDUCATION_STATUS:
      //console.log("educationStatus : " + action.payload);
      return (newState = {
        ...state,
        educationStatus: action.payload
      });

    case actionTypes.CHANGE_DATE_OF_BIRTH:
     // console.log("dateOfBirth : " + action.payload);
      return (newState = {
        ...state,
        dateOfBirth: action.payload
      });

    case actionTypes.CHANGE_PROFIL_PICTURE:
     // console.log("profilePicture : " + action.payload);
      return (newState = {
        ...state,
        profilePicture: action.payload
      });

    default:
      return state;
  }
};

export default changeLoginFormReducer;
