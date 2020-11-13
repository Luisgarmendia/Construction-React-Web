import axios from 'axios';

//constants
const PORT ="http://localhost:3001"
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
            registrantEmployee: '5f988684a6c28d8805c8c37e'
        })
        .then((res) => {
            dispatch({
                type: SET_CLIENT,
                payload: res.data.client
            })

            return resolve(res.data.client)
        })
        .catch((err) => {
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
            console.log(err)
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({error: true, message: "hubo un problema mi ciela"})
        })
    })
}