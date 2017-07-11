/**
 * Created by mobiloitte on 07/07/17.
 */
import { combineReducers } from "redux";
import userReducer from './userReducer';
import { routerReducer } from 'react-router-redux';


// it is a combination of all reducers file ,we are returning a leteral object which is combination of all reducer mean rootReducer


const reducers = combineReducers({
    user: userReducer,
    router: routerReducer

});

export default reducers;