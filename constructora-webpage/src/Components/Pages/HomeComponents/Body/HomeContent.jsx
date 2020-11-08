import React from 'react';
import './HomeContentStyle.css';
import { useSelector, useDispatch } from 'react-redux';
import { getClientList } from '../../../../Redux/Actions/Client';
import {Link } from 'react-router-dom'
import CustomerList from  '../../CustomerPages/CustomerListModal';
import { changeStatus } from '../../../../Redux/Actions/Collapse'

const HomeConten = () => {
    const clients = useSelector(state => state.clients)
    const dispatch = useDispatch();

    const changeState = (window, valor) => {
        dispatch(changeStatus(window, valor));
    }
    return(
        <div className="container"> 
        <div className="text-left text-uppercase text-bold-700 mb-3">
            <h2>Projects</h2>
            <button onClick={() => dispatch(getClientList())}>jalar data</button>
        </div>
        <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                <div className="card-content">
                    <div className="card-body">
                    <div className="media d-flex">
                        <div className="media-body text-left">
                        <h3 className="primary">278</h3>
                        <span>Actives</span>
                        </div>
                        <div className="align-self-center">
                        <i className="icon-rocket primary font-large-2 float-right"></i>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                <div className="card-content">
                    <div className="card-body">
                    <div className="media d-flex">
                        <div className="media-body text-left">
                        <h3 className="warning">156</h3>
                        <span>Pause</span>
                        </div>
                        <div className="align-self-center">
                        <i className="icon-control-pause warning font-large-2 float-right"></i>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        
            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                <div className="card-content">
                    <div className="card-body">
                    <div className="media d-flex">
                        <div className="media-body text-left">
                        <h3 className="success">64.89 %</h3>
                        <span>Finished</span>
                        </div>
                        <div className="align-self-center">
                        <i className="icon-check success font-large-2 float-right"></i>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                <a href="#" onClick = { () => dispatch(getClientList()) } className="stretched-link" >
                <div className="card-content">
                    <div className="card-body">
                    <div className="media d-flex">
                        <div className="media-body text-left">
                        <h3 className="primary">{clients.clientList.length}</h3>
                        <span>Customers</span>
                        </div>
                        <div className="align-self-center">
                        <i className="icon-user primary font-large-2 float-right"></i>
                        </div>
                    </div>
                    </div>
                </div>
                    </a>
                </div>
            </div>
        </div>
        
        <CustomerList />
        <hr  />

        <div className="text-left text-uppercase text-bold-700 my-3">
            <h2>Employees</h2>
        </div>
        <div className="row">

            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                    <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                    <h3 className="teal">223</h3>
                                    <span>Actives</span>
                                </div>
                                <div className="align-self-center">
                                    <i className="icon-users teal font-large-2 float-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card">
                    <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                    <h3 className="red">21</h3>
                                    <span>Inactive</span>
                                </div>
                                <div className="align-self-center">
                                    <i className="icon-users red font-large-2 float-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomeConten;