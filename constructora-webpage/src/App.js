import React, { useEffect } from 'react';
import dotenv from 'dotenv'
import SignIn from './Components/Login/SignIn';
import {Provider, useDispatch} from 'react-redux';
import generateStore from './Redux/Store'
import SignUp from './Components/Login/SignUp';
import Home from './Components/Pages/HomePage';
import ProjectDetail from './Components/Pages/HomeComponents/Projects/ProjectDetails/ProjectDetail';
import { loadingChangeStatus } from './Redux/loadingDuck';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const App = () => {
    const store = generateStore();

    return (
        <Provider store={store}> 
            <AppWrapper /> 
        </Provider>
    )
}
function AppWrapper(){
    const dispatch = useDispatch()
    useEffect(() => (dispatch(loadingChangeStatus(true))))
     dotenv.config();
    return(
            <Router>
                <Switch>
                    <Route exact path="/"  component={SignIn} />
                    <Route exact path="/SignUp" component={SignUp} />
                    <Route exact path="/Home/" component={Home} />
                    <Route exact path="/ProjectDetail/:id" component={ProjectDetail} />
                </Switch>
            </Router>
    );
}

export default App;