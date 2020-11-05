import axios from 'axios';
//constantes

const data = {
    user : []
}


//types
const POST_LOGIN = "PostLogin";
const SIGNUP = "signUp"

//reducer

export default function login(state = data, action){
    switch(action.type){
        case POST_LOGIN: 
            return {...state, user: action.payload}
        case SIGNUP:
            return {...state, userd: action.payload}
        default:
            return state
    }
}

//Actions

export const signIn = (email, password, history) => async (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        
        axios.post('http://localhost:3001/signIn/Email',
                    {
                        email: email,
                        password: password
                    })
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('Token', res.data.token);
            dispatch({
                type: POST_LOGIN,
                payload: res.data.user,

            })
            history.push('/home')
            return resolve(res.data.user)
        })
        .catch((err) => {
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({error : true, message: "Hubo un problema al iniciar sesion"})
        })
    })
}

export const signUp = (data, history) => (dispatch, getState) => {
    return new Promise((resolve, reject) =>{
        console.log(data)
        axios.post('http://localhost:3001/signUp',
        {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            constructionCo: data.company,
            jobPosition: data.jobPosition,
            email: data.email,
            password: data.password,
            date: Date.now(),
            role: 's-admin',
        })
        .then((res) => {
            localStorage.setItem('Token', res.token);
            localStorage.setItem('User', res.data.user)
            dispatch({
                type: SIGNUP,
                payload: res.data.user,
                status: res.status,
                token: res.token
            })
            history.push('/home')
            return resolve(res.data)
        })
        .catch((err) =>{
            if(err.response && err.response.data)
                return reject(err.response.data)
            else
                return reject({ error : true, message : "Ocurrio un error por favor intenta más tarde."});
        })
    
})
}