import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../../NavBar/Navbar';
import CheckingCollapse from './Collapse/CheckingAssistence';
import SummaryCollapse from './Collapse/EmployeeSummary';
import { getEmployeesByProject } from '../../../../../Redux/Actions/Projects';
import Button from '../../../../Reusables/Button';
import {changeStatus} from '../../../../../Redux/Actions/Collapse';
import { useParams } from 'react-router-dom';
import { changeStatus as statusModalChange } from '../../../../../Redux/Actions/Modals';
import AddProjectModal from './Modals/AddEmployee';
import { getProjectDetail } from '../../../../../Redux/Actions/Projects';
import moment from 'moment';
import Loading from '../../../../Reusables/Loading';

const ProjectDetail = (props) => {
    const dispatch = useDispatch();
    const collapseStatus = useSelector(state => state.collapseStatus);
    const project = useSelector(state => state.projects.projectDetail);
    const loading = useSelector(state => state.loading.loadingPRojectDetaild)
    const {id} = useParams();
    useEffect(()=>  dispatch(getProjectDetail(id)), [])
    
    if(loading){
        return(<Loading />)
    }
    else{
    return(
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <h5 className="text-left text-uppercase text-bold-300 ">Customer:</h5>
    <h4 className="text-left text-uppercase text-bold-700 ml-1">{project.customer.name}</h4>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <h5 className="text-left text-uppercase text-bold-300 ">Project:</h5>
                        <h4 className="text-left text-uppercase text-bold-700 ml-1">{project.name}</h4>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <h5 className="text-left text-uppercase text-bold-300 ">Start Date:</h5>
                        <h4 className="text-left text-uppercase text-bold-700 ml-1">{moment(project.startDate).format('LL')}</h4>
                    </div>
                </div>  
                <hr/>

                <div className="text-left text-uppercase text-bold-700 my-3">
            <h2>Employees</h2>
        </div>

        <div className="col-4 mb-2">
                        <Button type="submit" text="Add employee" onClick={() => dispatch(statusModalChange('setEmployToPRojec', true))} />
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
        <AddProjectModal />
            <CheckingCollapse />
            <SummaryCollapse />
            </div>
        </div>
    )
    }
}

export default ProjectDetail;