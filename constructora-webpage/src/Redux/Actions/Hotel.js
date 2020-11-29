import axios from 'axios';
import { changeSnackbarStatus } from '../SnackbarsStatus';
import { changeStatus } from './Modals'

//Constants
const PORT = process.env.REACT_APP_API_URL;
const data = {
    hotels: []
}

//Types
const GET_HOTELS = "geHotelList";
const SET_NEW_HOTEL = "setnewHotelpap";

//Reducer

export default function hotelReducer(state = data, action){
    switch(action.type){
        case GET_HOTELS:
            return {...state, hotels: action.payload}
        default:
            return state;
    }
}

//Actions

export const setNewHotel = (data) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        axios.post(PORT + '/other/SetnewHotel',
        {
            'name': data.name,
            'address' : data.address,
            'city' : data.city,
            'registrantID' : localStorage.getItem('tcpUserID'),
            'state' : data.state,
            "companyID" : localStorage.getItem('tcpCompanyID'),
            'date' : Date.now()
        })
        .then((res) => {
            dispatch(getHotelList());
            dispatch(changeStatus('hotel', false))
        })
        .catch((err) => {
            dispatch(changeSnackbarStatus('hotelis', true))
            if(err.response && err.response.data) 
                return reject(err.response.data)
            else
                return reject({error: true, message: "was a problem"})
        })
    })
}

export const getHotelList = () => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        var CompanyID = localStorage.getItem('tcpCompanyID')
        axios.get(PORT + `/other/GetHotelList/${CompanyID}`)
        .then((res) => {
            dispatch({
                type:GET_HOTELS,
                payload: res.data.Hotel
            })
            return resolve(res.data.Hotel)
        })
        .catch((err) => {
            if(err.response && err.response.data)
                return reject(err.response.data)
            else    
                return reject({error: true, message: "hubo un problema"})
        })
    })
}