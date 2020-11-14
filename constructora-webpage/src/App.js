import React from 'react';
import dotenv from 'dotenv'
import SignIn from './Components/Login/SignIn';
import {Provider} from 'react-redux';
import generateStore from './Redux/Store'
import SignUp from './Components/Login/SignUp';
import Home from './Components/Pages/HomePage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App(){
    const store = generateStore();
     dotenv.config();
    return(
        <Provider store = {store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={SignIn} />
                    <Route path="/SignUp" exact component={SignUp} />
                    <Route path="/Home/" exact component={Home} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;