import React, { useEffect } from 'react';
import './HomeContentStyle.css';
import { useSelector, useDispatch } from 'react-redux';
import { getClientList } from '../../../Redux/Actions/Client';
import { getProjects } from '../../../Redux/Actions/Projects'
import CustomerList from  './Customer/Collapse/CustomerListCollapse';
import { changeStatus } from '../../../Redux/Actions/Collapse';
import { withRouter } from 'react-router-dom';
import ActiveProject from './Projects/CollapseTables/ActiveProject';
import PausedProject from './Projects/CollapseTables/PausedProject';
import FinishedProject from './Projects/CollapseTables/FinishedProject';
import ActiveEmployees from './Employees/Collapse/ActiveEmployees';
import InactiveEmployees from './Employees/Collapse/InactiveEmployees';
import UsersCollapse from './Others/Collapse/UsersCollapse';
import HotelCollapse from './Others/Collapse/HotelsCollapse';
import { getHotelList } from '../../../Redux/Actions/Hotel';
import { getEmployeesList } from '../../../Redux/Actions/Employees';

const HomeConten = (props) => {
    const clients = useSelector(state => state.clients);
    const collapseStatus = useSelector(state => state.collapseStatus);
    const projects = useSelector(state => state.projects);
    const employees = useSelector(state => state.employees)
    const hotels = useSelector(state => state.hotels);
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(getClientList());
        dispatch(getProjects());
        dispatch(getHotelList());
        dispatch(getEmployeesList())
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
                <div className="card" onClick = { () => dispatch(changeStatus('activeEmployee', !collapseStatus.ActiveEmployeeOpen)) }>
                    <a href={() => false}>
                    <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                    <h3 className="teal">{employees.actives.length}</h3>
                                    <span  className="blue-grey darken-1">Actives</span>
                                </div>
                                <div className="align-self-center">
                                    <i className="icon-users teal font-large-2 float-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card" onClick={() => dispatch(changeStatus('inactiveEmployee', !collapseStatus.inactiveEmployeesOpen))}>
                    <a href={()=> false}>
                    <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                    <h3 className="red">{employees.inactives.length}</h3>
                                    <span  className="blue-grey darken-1">Inactive</span>
                                </div>
                                <div className="align-self-center">
                                    <i className="icon-users red font-large-2 float-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
            <ActiveEmployees />
            <InactiveEmployees />
            <hr  />

        <div className="text-left text-uppercase text-bold-700 my-3">
            <h2>Others</h2>
        </div>
        <div className="row">

            <div className="col-xl-3 col-sm-6 col-12 mb-3">
                <div className="card" onClick = { () => dispatch(changeStatus('users', !collapseStatus.userOpen)) }>
                    <a href={() => false}>
                    <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                    <h3 className="cyan">223</h3>
                                    <span  className="blue-grey darken-1">Users</span>
                                </div>
                                <div className="align-self-center">
                                    <i className="icon-user cyan font-large-2 float-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12 mb-3 border-darken-2">
                <div className="card " onClick = { () => dispatch(changeStatus('hotels', !collapseStatus.hotelOpen)) }>
                    <a href={() => false}>
                    <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                    <h3 className=" blue-grey">{hotels.hotels.length}</h3>
                                    <span  className="blue-grey darken-1">Hotels</span>
                                </div>
                                <div className="align-self-center">
                                    <i className="icon-calendar blue-grey font-large-2 float-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
        <UsersCollapse />
        <HotelCollapse />

    </div>
    )
}

export default HomeConten;