import {combineReducers} from 'redux';
import loginReducer from "./login/loginReducer";

//Bütün reducerslar burada toplanacak
const rootReducer = combineReducers({
    login:loginReducer,
   
});
export default rootReducer;