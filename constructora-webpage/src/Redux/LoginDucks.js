import axios from 'axios';
import { loadingChangeStatus } from '../Redux/loadingDuck';
import { changeSnackbarStatus } from '../Redux/SnackbarsStatus';
//constantes

const PORT = process.env.REACT_APP_API_URL;
const data = {
    user : []
}


//types
const POST_LOGIN = "PostLogin";
const SIGNUP = "signUp"

//reducer

export default function login(state = data, action){
    switch(action.type){
        case POST_LOGIN: 
            return {...state, user: action.payload}
        case SIGNUP:
            return {...state, userd: action.payload}
        default:
            return state
    }
}

//Actions

export const signIn = (email, password, history) => async (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        
        axios.post(PORT + '/signIn/Email',
                    {
                        email: email,
                        password: password
                    })
        .then((res) => {
            localStorage.setItem('tcpToken', res.data.token);
            localStorage.setItem('tcpUserID', res.data.user._id);
            localStorage.setItem('tcpCompanyID', res.data.user.companyID);

            dispatch({
                type: POST_LOGIN,
                payload: res.data.user,

            })
            dispatch(changeSnackbarStatus('signin', false));
            history.push('/home')
            dispatch(loadingChangeStatus(false));
            return res.status
        })
        .catch((err) => {
            dispatch(loadingChangeStatus(false));
            dispatch(changeSnackbarStatus('signin', true));
            if(err.response && err.response.data)
                return err.response.data
            else
                return reject({error : true, message: "Hubo un problema al iniciar sesion"})
        })
    })
}

export const signUp = (data, history) => (dispatch, getState) => {
    return new Promise((resolve, reject) =>{
        axios.post(PORT + '/signUp',
        {
            companyName: data.companyName,
            companyDescription: data.companyDescription,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            jobPosition: data.jobPosition,
            email: data.email,
            password: data.password,
            date: Date.now(),
            role: 's-admin',
        })
        .then((res) => {
            localStorage.setItem('Token', res.token);
            localStorage.setItem('User', res.data.user);
            dispatch({
                type: SIGNUP,
                payload: res.data.user,
                status: res.status,
                token: res.token
            })
            dispatch(changeSnackbarStatus('signup', false));
            history.push('/')
            
            dispatch(loadingChangeStatus(false));
            return resolve(res.data)
        })
        .catch((err) =>{
            dispatch(loadingChangeStatus(false));
            dispatch(changeSnackbarStatus('signup', true));
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({ error : true, message : "Ocurrio un error por favor intenta más tarde."});
        })
    
})
}

export const LogOut =  (history) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        try {
            
    localStorage.clear();
    history.push('/');
    resolve(true);
    return true;
        } catch (error) {
            console.log(error);
        }
    })
}
