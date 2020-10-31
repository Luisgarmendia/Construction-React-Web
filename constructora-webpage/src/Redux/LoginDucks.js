import axios from 'axios';
//constantes

const data ={
    array : Number
}


//types
const POST_LOGIN = "PostLogin";
const SIGNUP = "signUp"

//reducer

export default function login(state = data, action){
    switch(action.type){
        case POST_LOGIN: 
            return {...state, array: action.payload}
        case SIGNUP:
            return {...state, array: action.payload}
        default:
            return state
    }
}

//Actions

export const signIn = (email, password) => async (dispatch, getState) => {
    try {
        axios.post('http://localhost:3001/signIn/Email',
                    {
                        email: email,
                        password: password
                    })
        .then((res) => {
            console.log( `holas ${res.data.body}`);
            dispatch({
                type: POST_LOGIN,
                payload: res.data.statusCode
            })
        });
    } catch (error) {
        console.log(error)
    }
}

export const SignUp = (email, password, phoneNumber) => async (dispatch, getState) => {
    try {
        axios.post('http://localhost:3001/signUp',
        {
            email: email,
            password: password,
            phone: phoneNumber,
            date: Date.now(),
            role: 'Admin'
        })
        .then((data) =>{
            console.log( 'registrado? '+ data)
            dispatch({
                type: SIGNUP,
                payload: data.statusCode
            })
        })
    } catch (error) {
        
    }
}