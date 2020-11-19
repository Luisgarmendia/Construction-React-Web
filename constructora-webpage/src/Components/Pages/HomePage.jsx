import React from 'react';
import NavBar from '../Pages/NavBar/Navbar';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import HomeContent from './HomeComponents/HomeContent';

const Home = () => {
    return(
        <Router>
            <NavBar />
            <HomeContent />
        </Router>
        
    )
}

export default Home;