import React from 'react';
import NavBar from '../Pages/NavBar/Navbar';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import HomeContent from './HomeComponents/Body/HomeContent';
import UserList from '../Users/UserList';

const Home = () => {
    return(
        <Router>
            <NavBar />
            <HomeContent />
            <UserList />
        </Router>
        
    )
}

export default Home;