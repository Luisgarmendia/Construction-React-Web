import axios from 'axios';
import { changeStatus } from './Modals';
import { changeSnackbarStatus } from '../SnackbarsStatus';

//Constants
const PORT = process.env.REACT_APP_API_URL;
const data = {
    users:[]
}


///Types

const GET_USERS = "getUsers";
const SET_NEWUSER ="SETnewUser";

///Reduce

export default function usersReducer(state = data, action){
    switch(action.type){
        case GET_USERS:
            return {...state,users: action.payload }
        case SET_NEWUSER:
            return {...state,users: action.payload }
        default:
            return state;
        }
}

//Actions

export const getUsersList = () => async(dispatch,getState)=>{
    return new Promise((resolve, reject) =>{
        var CompanyID = localStorage.getItem('tcpCompanyID')
        axios.get(PORT + `/user/getUserList/${CompanyID}`)
        .then((res) =>{
            dispatch({
            type: GET_USERS,
            payload: res.data.users
        });
        return resolve(res.data.users)
        })
        .catch((err) =>{
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({error:true,message:`Error:${err}`})
        })
    })
}

export const setNewUsers = (d) => async(dispatch, getState) =>{
    return new Promise((resolve, reject) =>{
        axios.post(PORT + '/user/setNewUser',
        {
            "firsName": d.firsName,
            "lastName": d.lastName,
            "phone": d.phone,
            "email": d.email,
            "password": d.password,
            "companyID": localStorage.getItem('tcpCompanyID'),
            "jobPosition": d.jobPosition,
            "create_at": d.create_at,
            "role": d.role,
            "enable": d.enable,
            "addedBy": localStorage.getItem('tcpUserID')
        })
        .then((res)=>{
            dispatch(changeStatus('user', false));
            dispatch(getUsersList());
            return resolve(res.data.users);
        })
        .catch((err)=>{
            dispatch(changeSnackbarStatus('userIS', true));
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({error: true, message: `Error:${err}`})
        })
    })
}