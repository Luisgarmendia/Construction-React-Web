import axios from 'axios';


////constants
const PORT = process.env.REACT_APP_API_URL;
const projects = {
    actives: [],
    paused: [],
    finished: []
}

//////Types
const GET_PROJECTS = 'GetallProjects';
const SET_PROJECT = "setProject";

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
                'registrantEmployee' : '5f988684a6c28d8805c8c37e'
            })
        .then((res) => {
            return resolve(res.data)
        })
        .catch((err) => {
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({error: true, message: 'Hubo un problema al ingresar el proyecto'})
        })
    })
}