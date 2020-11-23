import axios from 'axios';
import { changeStatus } from './Modals';
import { changeSnackbarStatus } from '../SnackbarsStatus';
//constants
const PORT = process.env.REACT_APP_API_URL;
const data = {
    client: [],
    clientList: []
}

//Types
const SET_CLIENT = "setClient";
const GET_CLIENT_LIST ="GETlistClient";
//Reducer

export default function customer(state = data, action){
    switch(action.type){
        case SET_CLIENT: 
            return {...state, client: action.payload}
        case GET_CLIENT_LIST:
            return {...state, clientList: action.payload }
        default:
            return state;
    }
}

//Actions

export const setClient = (data) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        axios.post(PORT + '/setClient',
        {
            name: data.name,
            contactName: data.contactName,
            contactPhone: data.contactPhone,
            email: data.email,
            registrationDate: Date.now(),
            companyID: localStorage.getItem('tcpCompanyID'),
            registrantEmployee: localStorage.getItem('tcpUserID')
        })
        .then((res) => {
            dispatch({
                type: SET_CLIENT,
                payload: res.data.client
            })
            dispatch(changeStatus('customer', false));
            dispatch(getClientList());
            return resolve(res.data.client)
        })
        .catch((err) => {
            dispatch(changeSnackbarStatus('modalCstomer', true));
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({error: true, message: "Hubo un problema al setear client"})
        })
    })
}

export const getClientList = () => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        axios.get(PORT + '/getClientList')
        .then((res) => {
            dispatch({
                type: GET_CLIENT_LIST,
                payload: res.data.data
            })

            return resolve(res.data.data);
        })
        .catch((err) => {
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({error: true, message: "hubo un problema mi ciela"})
        })
    })
}