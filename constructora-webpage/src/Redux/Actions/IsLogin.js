

//constants
const data ={
    token: String
}


//types
const IS_LOGIN = "isLogin";

//reducer

export default function isLogin(state = data, action){
    switch(action.type){
        case IS_LOGIN:
            return {...state, user: action.payload}
        default:
            return state;
    }
}


//actions

export const verifyLogin  = (history) => async(dispatch, getState) => {
    return new Promise((resolve, reject) => {
        var token = localStorage.getItem('Token')
        console.log(`Token: ${token}`)
        if(token != null){
            dispatch({
                type: IS_LOGIN,
                payload: token
            })
            history.push('/home')
            return resolve(token);
        }
        else{
            return reject({error: true, })
        }
    })
}