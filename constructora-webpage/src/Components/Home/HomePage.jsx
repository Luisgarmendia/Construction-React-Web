import React from 'react';
import NavBar from './HomeComponents/NavBar/Navbar';

import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

const Home = () => {
    return(
        <Router>
            <NavBar />
                {/* <Route path="/"  exact component={}/>
            <Switch>

            </Switch> */}
        </Router>
        
    )
}

export default Home;