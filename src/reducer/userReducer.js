/**
 * Created by mobiloitte on 10/07/17.
 */

import { createReducer } from 'redux-act';
import { saveUserData } from './../actions/user';




const initialState= {
    email:'shaban.razaa@gmail.com',
    password:'',
    username:'shaban'

}


const userReducer = createReducer({
    [saveUserData]: (state,payload) => {    console.log(payload)
        const password = payload.name;
        const email = payload.email;
        const username = payload.username;
        return {...state ,email ,password ,username}
    }

}, initialState);



export default userReducer