

////constantes

const data = {
    isLoading : false
};


///////Types
const LOADING = "isLoadingType";


///Reducer

export default function loading(state = data, action){
    switch(action.type){
        case LOADING:
            return {...state, isLoading : action.payload}
        default:
            return state;
    }
}

///Actions

export const loadingChangeStatus = (status) => async (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: status
    })
}