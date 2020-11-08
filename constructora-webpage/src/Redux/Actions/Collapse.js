//Constants

const collapse = {
    customerOpen : false,
    employeeOpen : false,
    projectOpen : false,
    userOpen : false
}

////////Types
const CUSTOMER_STATUS ="CUSTOMERSTATUS";

/////////Reducer

export default function collapseStatus(state = collapse, action){
    switch(action.type){
        case CUSTOMER_STATUS:
            return {...state, customerOpen: action.payload}
        default:
            return state;
    }
}

///Actions

export const changeStatus = (window, status) => (dispatch, getState) => {
    switch(window){
        case 'customer':
            dispatch({
                type: CUSTOMER_STATUS,
                payload: status
            })
        break;
        default:
            console.log('asaber')
        break;
    }
}