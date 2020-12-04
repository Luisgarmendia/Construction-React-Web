import axios from 'axios';
import { changeSnackbarStatus } from '../SnackbarsStatus';
import { changeStatus } from './Modals';
////Constants
const PORT = process.env.REACT_APP_API_URL;
const employees = {
    actives: [],
    inactives: []
}

const Summary= {
    _id:"",
    firstName:"",
    lastName:"",
    regularTime:"",
    overTime:"",
    regularPay:"",
    overPay:"",
    total:""
}

let DataSummary=[]
///Types

const GET_EMPLOYEES = "getEmployees";
const GET_EMPLOYEESSUMMARY = "getEmployeesSummary";
const SET_NEWEMPLOYE ="SETnewEmployeq";

///Reducer

export default function employeesReducer(state = employees, action){
    var active = [], inactive = [];
    switch (action.type) {
        case GET_EMPLOYEES:
            for(var i in action.payload){
                action.payload[i].active
                ? active.push(action.payload[i])
                : inactive.push(action.payload[i])
            }
            return {...state, actives: active, inactives: inactive}
        case SET_NEWEMPLOYE:
            return {...state, actives: action.payload}
        default:
            return state;
    }
}


///Actions

export const getEmployeesList = () => async(dispatch, getState) => {
    return new Promise((resolve, reject) => {
        var CompanyID = localStorage.getItem('tcpCompanyID')
        axios.get(PORT + `/employees/GetEmployeesList/${CompanyID}`)
        
        .then((res) => {
            dispatch({
                type: GET_EMPLOYEES,
                payload: res.data.employees
            });
            return resolve(res.data.employees)
        })
        .catch((err) => {
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({error: true, message: `Error: ${err}`})
        })
    })
} 
export const getSummaryEmployees = (ProjectID) => async(dispatch, getState) => {
    return new Promise((resolve, reject) => {
        axios.get(PORT + `/employees/GetSummaryEmployees/${ProjectID}`)
        .then((res) => {
            for (const key1 in res.data) {
                if (res.data.employees.hasOwnProperty(key1)) {
                    const element = res.data[key1];
                    for (const key2 in element.data) {
                        if (element.data.hasOwnProperty(key2)) {
                            const data = element.data[key2];
                            let regularTime = data.hour>8.5? 8.5 :data.hour
                            let overTime    = data.hour>8.5? data.hour-8.5 :0
                            let regularPay  = regularTime * element.salary 
                            let overPay     = overTime*element.salary 
                            let total       = overPay + regularPay;
                            let dataComplete = new Summary({
                                _id:element._id,
                                firstName:element.firstName,
                                lastName:element.lastName,
                                regularTime: regularTime,
                                overTime: overTime,
                                regularPay: regularPay,
                                overPay: overPay,
                                total: total
                            })
                            DataSummary.push(dataComplete)
                        }
                    }
                }
            }
            dispatch({
                type: GET_EMPLOYEESSUMMARY,
                payload: DataSummary
            });
            return resolve(DataSummary)
        })
        .catch((err) => {
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({error: true, message: `Error: ${err}`})
        })
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
    "assignedProjects" : d.Project,
    "hotel" : d.hotel,
    "room" : d.room,
    "address" : d.address,
    "city" : d.city,
    "companyID": localStorage.getItem('tcpCompanyID'),
    "userRegistrant" : localStorage.getItem('tcpUserID'),
     "hourlySalary" : d.hourlySalary, 
})
        .then((res) => {
            dispatch(changeStatus('employee', false));
            dispatch(getEmployeesList());
            return resolve(res.data.employee);
        })
        .catch((err) => {
            dispatch(changeSnackbarStatus('employeeW', true));
                if(err.response && err.response.data)
                    return reject(err.response.data)
                else
                    return reject({error: true, message: `Error: ${err}`})
        })
    })
}