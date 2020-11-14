//Constants

const collapse = {
    customerOpen : false,
    ActiveEmployeeOpen : false,
    activeProjectOpen : false,
    pausedProjectOpen : false,
    finishedProject : false,
    userOpen : false
}

////////Types
const CUSTOMER_STATUS ="CUSTOMERSTATUS";
const ACTIVEPROJECT_STATUS = "PROjectActiveStatus";
const FINISHED_PROJECT = "finishedProject";
const PAUSED_PROJECT ="PausedProjectColl";
const ACTIVE_EMPLOYEE = "activeEmployee";
/////////Reducer

export default function collapseStatus(state = collapse, action){
    switch(action.type){
        case CUSTOMER_STATUS:
            return {...state, 
                customerOpen: action.payload, 
                activeProjectOpen: false,
                pausedProjectOpen: false,
                finishedProject: false,
                ActiveEmployeeOpen: false}
        case FINISHED_PROJECT: 
            return {...state, 
                finishedProject: action.payload, 
                customerOpen: false, 
                pausedProjectOpen: false,
                activeProjectOpen : false,
                ActiveEmployeeOpen: false}
        case PAUSED_PROJECT:
            return{...state,
                pausedProjectOpen: action.payload,
                customerOpen: false, 
                activeProjectOpen : false,
                finishedProject: false,
                ActiveEmployeeOpen: false
            }
        case ACTIVEPROJECT_STATUS: 
            return {...state, 
                activeProjectOpen: action.payload, 
                customerOpen: false, 
                pausedProjectOpen: false,
                finishedProject : false,
                ActiveEmployeeOpen: false} 
        case ACTIVE_EMPLOYEE:
            return{...state,
                activeProjectOpen: false, 
                customerOpen: false, 
                pausedProjectOpen: false,
                finishedProject : false,
                ActiveEmployeeOpen: action.payload} 
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
        case 'activeEmployee':
            CONS = ACTIVE_EMPLOYEE;
        break;
        default:
        break;
    }

    dispatch({
        type: CONS,
        payload: status
    })
}