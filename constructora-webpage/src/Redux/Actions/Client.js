import axios from 'axios';

//constants

const data = {
    client: []
}

//Types
const SET_CLIENT = "setClient";

//Reducer

export default function login(state = data, action){
    switch(action.type){
        case SET_CLIENT: 
            return {...state, user: action.payload}
        default:
            return state;
    }
}

//Actions

export const setClient = (data) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3001/setClient',
        {
            name: data.name,
            contactName: data.contactName,
            contactPhone: data.contactPhone,
            email: data.email,
            registrationDate: Date.now(),
            registrantEmployee: data.employe
        })
        .then((res) => {
            console.log(res.data)
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