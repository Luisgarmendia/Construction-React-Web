import axios from 'axios';

////Constants
const PORT = process.env.REACT_APP_API_URL;
const employees = {
    actives: [],
    inactives: []
}

///Types

const GET_EMPLOYEES = "getEmployees";

///Reducer

export default function employeesReducer(state = employees, action){
    switch (action.type) {
        case GET_EMPLOYEES:
            return {...state, user: action.payload}
    
        default:
            break;
    }
}


///Actions

export const getEmployeesList = () => async(dispatch, getState) => {
    return new Promise((resolve, reject) => {
        axios.get(PORT + "employees/GetEmployeesList")
    })
} 
