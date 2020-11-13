import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import login from './LoginDucks';
import employees from './EmployeesDucks';
import isLogin from './Actions/IsLogin';
import isOPen from './Actions/Modals';
import customer from './Actions/Client'
import collapseStatus from './Actions/Collapse';
import projectsReducer from'./Actions/Projects'

const rootReducer = combineReducers({
    login: login,
    projects: projectsReducer,
    employees: employees,
    clients: customer,
    token: isLogin,
    modalStatus: isOPen,
    collapseStatus: collapseStatus
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export  default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk)));
    return store;
}