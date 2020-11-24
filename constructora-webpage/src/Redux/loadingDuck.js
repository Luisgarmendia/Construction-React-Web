

////constantes

const data = {
    isLoading : true,
    loadingPRojectDetaild: true,
};


///////Types
const LOADING = "isLoadingType";
const LOADINGPROJECTDETAIL = 'LoadinfgporjectDetail';

///Reducer

export default function loading(state = data, action){
    switch(action.type){
        case LOADING:
            return {...state, isLoading : action.payload}
        case LOADINGPROJECTDETAIL:
            return {...state, loadingPRojectDetaild: action.payload}
        default:
            return state;
    }
}

///Actions

export const loadingChangeStatus = (window, status) => async (dispatch, getState) => {
    var C;
    switch(window){
        case 'projectDetail':
            C = LOADINGPROJECTDETAIL;
        break;
        default:
            C = LOADING
        break;
    }
    dispatch({
        type: C,
        payload: status
    })
}