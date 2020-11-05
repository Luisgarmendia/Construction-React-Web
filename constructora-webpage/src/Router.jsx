import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Components/Login/SignIn';
import Register from './Components/Login/SignUp';
import Home from './Components/Home/HomePage';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Router;