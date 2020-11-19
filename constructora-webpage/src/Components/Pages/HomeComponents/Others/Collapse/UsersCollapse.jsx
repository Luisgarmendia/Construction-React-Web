import React, { useState, useEffect  } from 'react';
import { Collapse } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import MuiDataTable from "mui-datatables";
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import { changeStatus } from '../../../../../Redux/Actions/Modals';
import AddUser from '../Modal/AddNewUser';

const UsersCollapse = (props) => {
    const isOpen = useSelector(store => store.collapseStatus.userOpen);
    let customerList = useSelector(store => store.clients.clientList);
    const dispatch = useDispatch();


    
    const columns = [


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
        label: 'Role',
        name: 'role',
        sortable: true
        },
        {
        label: 'Enable',
        name: 'role',
        sortable: true
        }
    ];  
    
    const title = <div className="row border-darken-4 ">
        <h3 className="blue-grey">Users</h3>
        <a href={()=> false} onClick={() => dispatch(changeStatus('user', true)) } className="success ml-auto "> Add <PersonAddRoundedIcon /></a>
        </div>
    return (
        <Collapse in={isOpen}>
        <div className=" table-responsive">
            <AddUser />
        <MuiDataTable title = {title} striped data={customerList} columns={columns} />
        </div>
        </Collapse>
    );
    }

export default UsersCollapse;