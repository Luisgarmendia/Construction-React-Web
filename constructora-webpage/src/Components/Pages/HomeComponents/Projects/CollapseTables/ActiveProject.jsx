import React, { useState  } from 'react';
import { Collapse } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { changeStatus } from '../../../../../Redux/Actions/Modals';
import AddProjectModal from '../Modals/AddProject';

const ActiveProject = (props) => {
    const history = props.history
const isOpen = useSelector(state => state.collapseStatus.activeProjectOpen)
const dispatch = useDispatch();
const projectList = useSelector(state => state.projects.actives)


return (
    <Collapse in={isOpen}>
        <div className="mx-2">
            <div className="container justify-content-center">
                <div className="row">
                    <h4 align="center">Active projects</h4>
				<div className="col-sm-6 col-lg-3 col-xs-12 mb-2">
					<button onClick={() => dispatch(changeStatus('project', true))} className="col btn btn-dark-moon btn-rounded">New project</button>
				</div>
                <AddProjectModal />
                </div>
                <div className="row">
                    {projectList.map((item) => 
                    <div className="col-xl-3 col-sm-6 col-12" key={item._id}>
                        <a href={()=> false}>
                            <div className="card">
                                <Link to={ `/ProjectDetail/${item._id}`}>
                            <div className="card-content">
                                <div className="card-body">
                                <div className="media d-flex">
                                    <div className="media-body text-left">
                                    <h5 className="primary">{item.name}</h5>
                                    <span className="blue-grey darken-1">{item.city}</span>
                                    </div>
                                    <div className="align-self-center">
                                    <i className="icon-rocket primary font-large-1 float-right"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </Link>
                            </div>
                        </a>
                </div>	)} 
            
                </div>
            </div>
        </div>
    </Collapse>
);
}

export default withRouter(ActiveProject);