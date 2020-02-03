import * as actionTypes from "../actionTypes";

export function changePhoneNumber(phoneNumber) {
  return { type: actionTypes.CHANGE_PHONE_NUMBER, payload: phoneNumber };
}

export function changeTcNumber(tcNo) {
  return { type: actionTypes.CHANGE_TC_NO, payload: tcNo };
}

export function changePassword(password) {
  return { type: actionTypes.CHANGE_PASSWORD, payload: password };
}

export function changePostCode(postCode) {
  return { type: actionTypes.CHANGE_POST_CODE, payload: postCode };
}

export function changeFirstName(firstName) {
  return { type: actionTypes.CHANGE_FIRST_NAME, payload: firstName };
}


export function changeLastName(lastName) {
  return { type: actionTypes.CHANGE_LAST_NAME, payload: lastName };
}

export function changeIbanNo(ibanNo) {
  return { type: actionTypes.CHANGE_IBAN_NO, payload: ibanNo };
}

export function changeEducationStatus(educationStatus) {
  return { type: actionTypes.CHANGE_EDUCATION_STATUS, payload: educationStatus };
}

export function changeDateOfBirth(dateOfBirth) {
  return { type: actionTypes.CHANGE_DATE_OF_BIRTH, payload: dateOfBirth };
}

export function changeDateProfilePicture(profilePicture) {
  return { type: actionTypes.CHANGE_PROFIL_PICTURE, payload: profilePicture };
}

