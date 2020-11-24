import axios from 'axios';
import { changeStatus } from './Modals';
import { changeSnackbarStatus } from '../SnackbarsStatus';
import { loadingChangeStatus } from '../loadingDuck';
import { getEmployeesList } from './Employees';

////constants
const PORT = process.env.REACT_APP_API_URL;
const projects = {
    actives: [],
    paused: [],
    finished: [],
    employeesByProject: [],
    projectDetail: []
}

//////Types
const GET_PROJECTS = 'GetallProjects';
const SET_PROJECT = "setProject";
const GET_EMPLOYEES = "getemployeesByProject";
const PROJECTDETAIL = "projectDetailsom";

//////REducer

export default function projectsReducer(state = projects, action){
    switch(action.type){
        case GET_PROJECTS:
            var active = [], finish = [], pause = [];
            for(const i in action.payload){
                switch (action.payload[i].status) {
                    case 'active':
                        active.push(action.payload[i])
                    break;
                    case 'paused':
                        pause.push(action.payload[i])
                    break;
                    case 'finished':
                        finish.push(action.payload[i])
                        break;
                
                    default:
                        break;
                }
            }
            return {...state, actives: active, paused : pause,  finished: finish }
        case SET_PROJECT:
            return {...state}
        case GET_EMPLOYEES:
            return {...state, employeesByProject: action.payload}
        case PROJECTDETAIL:
            return {...state, projectDetail: action.payload }
        default:
            return state;
    }
}

//////Actions

export const getProjects = () => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        axios.get(PORT + '/project/getProjects')
        .then((res) => {
            dispatch({
                type:GET_PROJECTS,
                payload: res.data.projects
            })
            dispatch(loadingChangeStatus(false));
            return resolve(res.data.projects)
        })
        .catch((err) => {
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({error: true, message: 'Hubo un problema al realizar la peticion.'})
        })
    })
}

export const SetNewProject = (data) => (dispatch, getState) => {

    return new Promise((resolve, reject) => {
        axios.post(PORT + '/project/inserProject',
            {
                'name' : data.name,
                'address': data.address,
                'city' : data.city,
                'code' : data.code,
                'customer' : data.customer,
                'startDate' : data.startDate,
                'registrationDate' : Date.now(),
                'userRegistrant' : localStorage.getItem('tcpUserID'),
                'companyID' : localStorage.getItem('tcpCompanyID')
            })
        .then((res) => {
            dispatch(getProjects());
            dispatch(changeStatus('project', false))
            return resolve(res.data)
        })
        .catch((err) => {
            dispatch(changeSnackbarStatus('projectWein', true))
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({error: true, message: 'Hubo un problema al ingresar el proyecto'})
        })
    })
}

export const getEmployeesByProject = (projectID) => (dispatch, getState) => {
    var companyID = localStorage.getItem('tcpCompanyID');
    
    return new Promise((resolve, reject) => {
        axios.get(PORT + `/project/getEmListByPro/${companyID}?projectID=${projectID}`)
        .then((res) => {
            dispatch({
                type:GET_EMPLOYEES,
                payload: res.data.employees
            })
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

export const getProjectDetail = (projectID) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        axios.get(PORT + `/project/getProjectByID/${projectID}`)
        .then((res) => {
            dispatch({
                type: PROJECTDETAIL,
                payload: res.data.project
            })
            dispatch(loadingChangeStatus('projectDetail', false))
            return resolve(res.data.project)
        })
        .catch((err) => {
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({error: true, message:`Error: ${err}`})
        })
    })
}

export const setEmployeesToProject = (lists, projectID) => (dispatch, getState) => {
    var list = [];
    for(var i in lists){
        let object = {
            _id: lists[i]._id,
            salary: lists[i].salary,
            data: []
        }
        list.push(object);
    }
    return new Promise((resolve, reject) => {
        axios.post(PORT + '/project/addEmployToProject',
        {
            'Lists' : list,
            'projectID' : projectID
        })
        .then(async(res) => {
            await dispatch(changeStatus('setEmployToPRojec', false));
            await dispatch(getProjectDetail());
            await dispatch(getEmployeesList)
            return resolve(true);
        })
        .catch((err) => {
            if(err.response &&  err.response.data)
                return reject(err.response.data)
            else
                return reject({error: true, message: `"error: ${err}`})
        })
    })
}

export const checkEmployeeAssistence = (employeeLisstID) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        axios.post(PORT + '',
        {
            employeeID: employeeLisstID,
            Date: Date.now(),
        })
        .then((res) => {
            
            return resolve(res.status)
        })
        .catch((err) => {
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({error: true, message: `Error: ${err}`})
        })
    })
}