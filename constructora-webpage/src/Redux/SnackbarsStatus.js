

////Constantes 

const data = {
    signIn : false,
    signUp : false,
    mdalCstmer : false,
    project : false,
    employees : false,
    user : false,
    hotel : false,
}

/// Types

const SIGNIN = "Dsadsadsaergfd";
const SIGNUP = "fsdsnahjdsjafndmfdfmjwirnewk";
const MDALCSTMR = "modaslcustomersasajdsad";
const PROJECTC = "projectsConstant";
const EMPLOYEE = "employesssconstanas";
const USER = 'neUSerSnackbar';
const HOTEL = "this is hotelx";

//// Reducer
export default function snackbar(state = data, action){
    switch(action.type){
        case SIGNIN :
            return {...state,
                signUp: false, 
                mdalCstmer : false,
                project : false,
                employees : false,
                signIn : action.payload}
        case SIGNUP:
            return {...state, 
                signIn : false,
                mdalCstmer : false,
                project : false,
                employees : false,
                signUp : action.payload}
        case MDALCSTMR:
            return {...state,
                signIn : false,
                signUp : false,
                project : false,
                employees : false,
                mdalCstmer : action.payload
            }
        case PROJECTC:
            return {...state,
                signIn : false,
                signUp : false,
                mdalCstmer : false,
                employees : false,
                project : action.payload,
            }
        case EMPLOYEE:
            return {...state,
                signIn : false,
                signUp : false,
                mdalCstmer : false,
                project : false,
                employees : action.payload,
            }
        case USER:
            return {...state,
                user: action.payload
            }
        case HOTEL:
            return {...state,
                hotel: action.payload}

        default:
            return state;
    }
}

export const changeSnackbarStatus = (window, status) => (dispatch, getState) => {
   var CONST
    switch(window){
        case 'signin':
            CONST = SIGNIN
        break;
        case 'signup':
            CONST = SIGNUP
        break;
        case 'modalCstomer':
            CONST = MDALCSTMR;
        break;
        case 'projectWein':
            CONST = PROJECTC;
        break;
        case "employeeW":
            CONST = EMPLOYEE;
        break;
        case "userIS":
            CONST = USER;
        break;
        case 'hotelis':
            CONST = HOTEL;
        break
        default:
        break;
    }

    dispatch({
        type: CONST,
        payload: status
    })
}