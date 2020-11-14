import axios from 'axios';

//constants
const PORT = process.env.REACT_APP_API_URL;
const data ={ 
    array: []
}

//Types
const GET_EMPLOYEES = "getEmployes";


//Reducer
export default function employees(state = data, action){
    switch(action.type){
        case GET_EMPLOYEES:
            return {...state, array: action.payload}
        default:
            return state
    }
}

//Actions

export const getEmployees = () => (dispatch, getState) =>{
    return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                 console.log(res)
                dispatch({
                    type: GET_EMPLOYEES,
                    payload: res.data
                })
                return resolve(res.data);
            })
                .catch((err) => {
                    if(err.response && err.response.data) return reject(err.response.data)

                    return reject({err : true, message: "have a problem"})
                })

    })
}