import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import login from './LoginDucks';
import employeesReducer from './Actions/Employees';
import isLogin from './Actions/IsLogin';
import isOPen from './Actions/Modals';
import customer from './Actions/Client';
import collapseStatus from './Actions/Collapse';
import projectsReducer from'./Actions/Projects';
import occupationReducer from './Actions/Occupation';
import hotelReducer from './Actions/Hotel';
import loading from './loadingDuck';
import snackbar from './SnackbarsStatus';

const rootReducer = combineReducers({
    loading: loading,
    snackbar: snackbar,
    login: login,
    projects: projectsReducer,
    employees: employeesReducer,
    clients: customer,
    token: isLogin,
    modalStatus: isOPen,
    collapseStatus: collapseStatus,
    occupations: occupationReducer,
    hotels: hotelReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export  default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk)));
    return store;
}