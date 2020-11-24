import React from 'react';
import { Collapse } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import MuiDataTable from "mui-datatables";
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import { changeStatus } from '../../../../../Redux/Actions/Modals';

const ActiveEmployees = (props) => {
    const isOpen = useSelector(store => store.collapseStatus);
    let activeEmployeesList = useSelector(store => store.employees.actives);
    const dispatch = useDispatch();

    
    const columns = [

        {
        label: 'NickName',
        name: 'nickName',
        sortable: true
        },
        {
        label: 'First Name',
        name: 'firstName',
        sortable: true
        },
        {
        label: 'Last Name',
        name: 'lastName',
        sortable: true
        },
        {
        label: 'Phone',
        name: 'phone',
        sortable: true
        },
        {
        label: 'Email',
        name: 'email',
        sortable: true
        },
        {
        label: 'Hotel',
        name: 'hotel',
        sortable: true
        },
        {
        label: 'City',
        name: 'city',
        sortable: true
        },
    ];  
    
    const title = <div className="row border-darken-4 ">
        <h3 className="blue-grey">Active Employees</h3>
        <a href={()=> false} onClick={() => dispatch(changeStatus('employee', true)) } className="success ml-auto "> Add <PersonAddRoundedIcon /></a>
        </div>
    return (
        <Collapse in={isOpen.ActiveEmployeeOpen}>
        <div className=" table-responsive">
        <MuiDataTable title = {title} striped data={activeEmployeesList} columns={columns} />
        </div>
        </Collapse>
    );
    }

export default ActiveEmployees;