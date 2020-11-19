import axios from 'axios';

////Constants
const PORT = process.env.REACT_APP_API_URL;
const data = {
    occupation :  []
}


///Types
const GET_LIST = "getList";


//Reducer

export default function occupationReducer(state = data, action){
    return {...state, occupation: action.payload}
    /* witch(action.type){
        case GET_LIST:
            return {...state, occupation: action.payload}
        default:
            return state
    } */
}

///// Actions

export const getOccupations = () => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        axios.get(PORT + '/other/GetOccupationList',)
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: GET_LIST,
                payload: res.data.occupation
            })
            return resolve(res.data.occupation)
        })
        .catch((err) => {
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({error: true, message: `Error: ${err}`})
        })
    })
}