//Constants

const collapse = {
    customerOpen : false,
    employeeOpen : false,
    activeProjectOpen : false,
    pausedProjectOpen : false,
    finishedProject : false,
    userOpen : false
}

////////Types
const CUSTOMER_STATUS ="CUSTOMERSTATUS";
const ACTIVEPROJECT_STATUS = "PROjectActiveStatus";
const FINISHED_PROJECT = "finishedProject";
const PAUSED_PROJECT ="PausedProjectColl"
/////////Reducer

export default function collapseStatus(state = collapse, action){
    switch(action.type){
        case CUSTOMER_STATUS:
            return {...state, 
                customerOpen: action.payload, 
                activeProjectOpen: false,
                pausedProjectOpen: false,
                finishedProject: false}
        case FINISHED_PROJECT: 
            return {...state, 
                finishedProject: action.payload, 
                customerOpen: false, 
                pausedProjectOpen: false,
                activeProjectOpen : false}
        case PAUSED_PROJECT:
            return{...state,
                pausedProjectOpen: action.payload,
                customerOpen: false, 
                activeProjectOpen : false,
                finishedProject: false
            }
        case ACTIVEPROJECT_STATUS: 
            return {...state, 
                activeProjectOpen: action.payload, 
                customerOpen: false, 
                pausedProjectOpen: false,
                finishedProject : false}    
        default:
            return state;
    }
}

///Actions

export const changeStatus = (window, status) => (dispatch, getState) => {
    let CONS = '';
    switch(window){
        case 'customer':
            CONS = CUSTOMER_STATUS;
        break;
        case 'finishedProject':
            CONS = FINISHED_PROJECT;
        break;
        case 'activeProject':
            CONS = ACTIVEPROJECT_STATUS;
        break;
        case 'pausedProject':
            CONS = PAUSED_PROJECT;
        break;
        default:
        break;
    }

    dispatch({
        type: CONS,
        payload: status
    })
}