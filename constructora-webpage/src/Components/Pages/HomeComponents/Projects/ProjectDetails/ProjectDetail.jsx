import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../../NavBar/Navbar';
import CheckingCollapse from './Collapse/CheckingAssistence';
import SummaryCollapse from './Collapse/EmployeeSummary';
import { getEmployeesByProject } from '../../../../../Redux/Actions/Projects';
import Button from '../../../../Reusables/Button';
import {changeStatus} from '../../../../../Redux/Actions/Collapse';
import { useParams } from 'react-router-dom';  

const ProjectDetail = (props) => {
    const dispatch = useDispatch();
    const collapseStatus = useSelector(state => state.collapseStatus);
    const employeesList = useSelector(state => state.projects)

    const {id} = useParams();

    
    return(
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <h5 className="text-left text-uppercase text-bold-300 ">Customer:</h5>
                        <h4 className="text-left text-uppercase text-bold-700 ml-1">TCP Construction</h4>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <h5 className="text-left text-uppercase text-bold-300 ">Project:</h5>
                        <h4 className="text-left text-uppercase text-bold-700 ml-1">Jurassic Park</h4>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <h5 className="text-left text-uppercase text-bold-300 ">Start Date:</h5>
                        <h4 className="text-left text-uppercase text-bold-700 ml-1">14 November 2023</h4>
                    </div>
                </div>  
                <hr/>

                <div className="text-left text-uppercase text-bold-700 my-3">
            <h2>Employees</h2>
        </div>

        <div className="col-4">
                        <Button type="submit" text="Add employee" onClick={() => dispatch()} />
                    </div>
        <div className="row">

            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card" onClick = { () => dispatch(changeStatus('checkEMployees', !collapseStatus.checkListEmployees)) }>
                    <a href={() => false}>
                    <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                    <h3 className="success">Check</h3>
                                    <span  className="blue-grey darken-1">Assistance</span>
                                </div>
                                <div className="align-self-center">
                                    <i className="icon-user-following success font-large-2 float-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card" onClick={() => dispatch(changeStatus('summaryProject', !collapseStatus.summaryProjectPay))}>
                    <a href={()=> false}>
                    <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                    <h3 className="info darken-4">summary</h3>
                                    <span  className="blue-grey darken-1">Employees data</span>
                                </div>
                                <div className="align-self-center">
                                    <i className="icon-docs info darken-4 font-large-2 float-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
            <CheckingCollapse />
            <SummaryCollapse />
            </div>
        </div>
    )
}

export default ProjectDetail;