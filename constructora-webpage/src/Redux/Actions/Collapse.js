//Constants

const collapse = {
    customerOpen : false,
    ActiveEmployeeOpen : false,
    inactiveEmployeesOpen : false,
    activeProjectOpen : false,
    pausedProjectOpen : false,
    finishedProject : false,
    userOpen : false,
    hotelOpen : false,
    checkListEmployees : false,
    summaryProjectPay : false
}

////////Types
const CUSTOMER_STATUS ="CUSTOMERSTATUS";
const ACTIVEPROJECT_STATUS = "PROjectActiveStatus";
const FINISHED_PROJECT = "finishedProject";
const PAUSED_PROJECT ="PausedProjectColl";
const ACTIVE_EMPLOYEE = "activeEmployee";
const INACTIVE_EMPLOYEES = "inactiveEmployeesOpenDS";
const USERS = "usersCollapseOpen";
const HOTEL = "hotelOpen : false,";
const CHECKLIST  = "CHECKLISTEMPLOYESSS";
const SUMMARYPAYPROJECT = "umaryPAyPRojectSumm"

/////////Reducer

export default function collapseStatus(state = collapse, action){
    switch(action.type){
        case CUSTOMER_STATUS:
            return {...state, 
                customerOpen: action.payload, 
                activeProjectOpen: false,
                pausedProjectOpen: false,
                finishedProject: false,
                inactiveEmployeesOpen : false,
                userOpen : false,
                hotelOpen : false,
                checkListEmployees : false,
                summaryProjectPay : false,
                ActiveEmployeeOpen: false}
        case FINISHED_PROJECT: 
            return {...state, 
                finishedProject: action.payload, 
                customerOpen: false, 
                pausedProjectOpen: false,
                activeProjectOpen : false,
                inactiveEmployeesOpen : false,
                userOpen : false,
                hotelOpen : false,
                checkListEmployees : false,
                summaryProjectPay : false,
                ActiveEmployeeOpen: false}
        case PAUSED_PROJECT:
            return{...state,
                pausedProjectOpen: action.payload,
                customerOpen: false, 
                activeProjectOpen : false,
                finishedProject: false,
                inactiveEmployeesOpen : false,
                userOpen : false,
                hotelOpen : false,
                checkListEmployees : false,
                summaryProjectPay : false,
                ActiveEmployeeOpen: false
            }
        case ACTIVEPROJECT_STATUS: 
            return {...state, 
                activeProjectOpen: action.payload, 
                customerOpen: false, 
                pausedProjectOpen: false,
                finishedProject : false,
                inactiveEmployeesOpen : false,
                userOpen : false,
                hotelOpen : false,
                checkListEmployees : false,
                summaryProjectPay : false,
                ActiveEmployeeOpen: false} 
        case ACTIVE_EMPLOYEE:
            return{...state,
                activeProjectOpen: false, 
                customerOpen: false, 
                pausedProjectOpen: false,
                finishedProject : false,
                inactiveEmployeesOpen : false,
                userOpen : false,
                hotelOpen : false,
                summaryProjectPay : false,
                checkListEmployees : false,
                ActiveEmployeeOpen: action.payload}
        case INACTIVE_EMPLOYEES:
            return {...state,
                inactiveEmployeesOpen : action.payload,
                activeProjectOpen: false, 
                customerOpen: false, 
                pausedProjectOpen: false,
                finishedProject : false,
                ActiveEmployeeOpen: false,
                userOpen : false,
                hotelOpen : false,
                summaryProjectPay : false,
                checkListEmployees : false,
            }
        case USERS:
            return  {...state,
                inactiveEmployeesOpen : false,
                activeProjectOpen: false, 
                customerOpen: false, 
                pausedProjectOpen: false,
                finishedProject : false,
                ActiveEmployeeOpen: false,
                hotelOpen : false,
                summaryProjectPay : false,
                checkListEmployees : false,
                userOpen : action.payload,
            }
        case HOTEL:
            return {...state,
                inactiveEmployeesOpen : false,
                activeProjectOpen: false, 
                customerOpen: false, 
                pausedProjectOpen: false,
                finishedProject : false,
                ActiveEmployeeOpen: false,
                userOpen : false,
                summaryProjectPay : false,
                checkListEmployees : false,
                hotelOpen : action.payload,
            }
        case CHECKLIST:
            return {...state,
                inactiveEmployeesOpen : false,
                activeProjectOpen: false, 
                customerOpen: false, 
                pausedProjectOpen: false,
                finishedProject : false,
                ActiveEmployeeOpen: false,
                userOpen : false,
                summaryProjectPay : false,
                checkListEmployees : action.payload,
                hotelOpen : false,
            }
        case SUMMARYPAYPROJECT:
            return {...state,
                inactiveEmployeesOpen : false,
                activeProjectOpen: false, 
                customerOpen: false, 
                pausedProjectOpen: false,
                finishedProject : false,
                ActiveEmployeeOpen: false,
                userOpen : false,
                checkListEmployees : false,
                hotelOpen : false,
                summaryProjectPay : action.payload,
            }
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
        case 'inactiveEmployee':
            CONS = INACTIVE_EMPLOYEES;
        break;
        case 'users':
            CONS = USERS;
        break;
        case 'hotels':
            CONS = HOTEL;
        break;
        case 'checkEMployees':
            CONS = CHECKLIST;
        break;
        case 'summaryProject':
            CONS = SUMMARYPAYPROJECT;
        break;
        default:
        break;
    }

    dispatch({
        type: CONS,
        payload: status
    })
}