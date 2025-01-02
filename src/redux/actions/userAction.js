import axios from 'axios'
import toastr from 'toastr'
const APIENDPOINT="https://platform-zero-api.onrender.com"
import {USER_LOGIN,USER_SIGNUP} from '../actions/actionCreator'

export const userLogin= async(body)=>{
    const userLogin=await axios.post(`${APIENDPOINT}/api/user/login`,body);
    return {type:USER_LOGIN , payload:userLogin}
}


export const userSignup= async(body)=>{
    const userSignup=await axios.post(`${APIENDPOINT}/api/user/signup`,body);
    return {type:USER_SIGNUP , payload:userSignup}
}

