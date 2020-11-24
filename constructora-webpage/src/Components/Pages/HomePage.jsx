import React, {Fragment} from 'react';
import NavBar from '../Pages/NavBar/Navbar';
import {withRouter} from "react-router-dom";
import HomeContent from './HomeComponents/HomeContent';

const Home = () => {
    return(
        <Fragment>
            <NavBar />
            <HomeContent />
            </Fragment>
    )
}

export default withRouter(Home);