import React from 'react';
import './Styles/NavBar.css'
import AddButton from './AddButtons';
import {
    Link
} from "react-router-dom";
const NavBar = () => {
    return(
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <AddButton />
        </header>
    );
}

export default NavBar;