import React from 'react';
import './Styles/NavBar.css';
import { useSelector, useDispatch } from 'react-redux'; 
import {LogOut} from '../../../Redux/LoginDucks';
import {
    Link, withRouter
} from "react-router-dom";

import {  IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';




const NavBar = (props) => {
    const dispatch = useDispatch();
    const { history } = props;
    return(
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href={()=> false}>Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={()=> false} >TCP</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <h1 className="text-center text-uppercase">Techno Construction Plus</h1>
            <hr className="my-2" />
             <div className="Logout">
                    <IconButton  onClick={()=>{
                        dispatch(LogOut(history))
                        }}>Logout
                        <ArrowForwardIosIcon className="" fontSize="inherit" >
                        </ArrowForwardIosIcon>
                    </IconButton>
                </div>
        </header>
    );
}

export default withRouter(NavBar);