import axios from 'axios';

////Constants
const PORT = process.env.REACT_APP_API_URL;
const employees = {
    actives: [],
    inactives: []
}

///Types

const GET_EMPLOYEES = "getEmployees";
const SET_NEWEMPLOYE ="SETnewEmployeq";

///Reducer

export default function employeesReducer(state = employees, action){
    switch (action.type) {
        case GET_EMPLOYEES:
            return {...state, actives: action.payload}
        case SET_NEWEMPLOYE:
            return {...state, actives: action.payload}
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

export const setNewEmployee = (d) => async(dispatch, getState) => {
    return new Promise((resolve, reject) => {
        axios.post(PORT + '/employees/SetNewEmployee',
        {
    "nickName" : d.nickName,
    "firstName" : d.firstName,
    "lastName" : d.lastName,
    "phone" : d.phone,
    "phone2" : d.phone2,
    "email" : d.email,
    "labor" : d.labor,
    "assignedProjects" : d.assignedProjects,
    "hotel" : d.hotel,
    "address" : d.address,
    "city" : d.city,
    "hourlySalary" : d.hourlySalary,
        })
        .then((res) => {
            dispatch({
                type: SET_NEWEMPLOYE,
                payload: res.data.employee
            })
            return resolve(res.data);
        })
        .catch((err) => {
                if(err.response && err.response.data)
                    return reject(err.response.data)
                else
                    return reject({error: true, message: `Error: ${err}`})
        })
    })
}