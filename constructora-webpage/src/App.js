import React from 'react';
import SignIn from './Components/Login/SignIn';
import {Provider} from 'react-redux';
import generateStore from './Redux/Store'
import SignUp from './Components/Login/SignUp';
import Home from './Components/Home/HomePage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App(){
    const store = generateStore();
    return(
        <Provider store = {store}>
            <Router>
                <Switch>
                    <Route path="/SignIn" exact component={SignIn} />
                    <Route path="/SignUp" exact component={SignUp} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;