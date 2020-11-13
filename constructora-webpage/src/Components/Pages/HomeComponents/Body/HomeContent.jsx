import React, { useEffect } from 'react';
import './HomeContentStyle.css';
import { useSelector, useDispatch } from 'react-redux';
import { getClientList } from '../../../../Redux/Actions/Client';
import { getProjects } from '../../../../Redux/Actions/Projects'
import CustomerList from  '../Customer/Collapse/CustomerListCollapse';
import { changeStatus } from '../../../../Redux/Actions/Collapse';
import { withRouter } from 'react-router-dom';
import ActiveProject from '../Projects/CollapseTables/ActiveProject';
import PausedProject from '../Projects/CollapseTables/PausedProject';
import FinishedProject from '../Projects/CollapseTables/FinishedProject';

const HomeConten = (props) => {
    const clients = useSelector(state => state.clients);
    const collapseStatus = useSelector(state => state.collapseStatus);
    const projects = useSelector(state => state.projects)
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(getClientList());
        dispatch(getProjects());
        console.log('aver')
    }, [])

    return(
        <div className="container"> 
        <div className="text-left text-uppercase text-bold-700 mb-3">
            <h2>Projects</h2>
        </div>
        <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card" onClick = { () => dispatch(changeStatus('activeProject', !collapseStatus.activeProjectOpen)) }>
                    <a href={() => false}> 
                        <div className="card-content">
                            <div className="card-body">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                <h3 className="primary">{projects.actives.length}</h3>
                                <span className="blue-grey darken-1">Actives</span>
                                </div>
                                <div className="align-self-center">
                                <i className="icon-rocket primary font-large-2 float-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card" onClick = { () => dispatch(changeStatus('pausedProject', !collapseStatus.pausedProjectOpen)) }>
                    <a href={() => false}>
                        <div className="card-content">
                            <div className="card-body">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                <h3 className="warning">{projects.paused.length}</h3>
                                <span className="blue-grey darken-1">Pause</span>
                                </div>
                                <div className="align-self-center">
                                <i className="icon-control-pause warning font-large-2 float-right"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        
            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card" onClick = { () => dispatch(changeStatus('finishedProject', !collapseStatus.finishedProject)) }>
                    <a href={() => false}>
                        <div className="card-content">
                            <div className="card-body">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                <h3 className="success">{projects.finished.length}</h3>
                                <span className="blue-grey darken-1">Finished</span>
                                </div>
                                <div className="align-self-center">
                                <i className="icon-check success font-large-2 float-right"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                </a>
                </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card" onClick = { () => dispatch(changeStatus('customer', !collapseStatus.customerOpen)) }>
                    <a href={() => false}>
                        <div className="card-content">
                            <div className="card-body">
                            <div className="media d-flex ">
                                <div className="media-body text-left">
                                <h3 className="info">{clients.clientList.length}</h3>
                                <span  className="blue-grey darken-1">Customers</span>
                                </div>
                                <div className="align-sel   f-center">
                                <i className="icon-user info font-large-2 float-right"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <CustomerList/>
        <ActiveProject/>
        <PausedProject />
        <FinishedProject />
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

export default withRouter(HomeConten);