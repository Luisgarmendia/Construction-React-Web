import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { ListItemIcon, ListItemText, IconButton } from "@material-ui/core";
import MuiDataTable from "mui-datatables";
import EditIcon from "@material-ui/icons/Edit";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import MenuIcon from "@material-ui/icons/Menu";
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import { StyledMenu, StyledMenuItem } from "../../Projects/CollapseTables/StyledMenu";
import { changeStatus } from '../../../../../Redux/Actions/Modals';
import AddEmployeeModal from '../ModalEmployees/AddEmployee';

const InactiveEmployees = () => {
    const isOpen = useSelector(store => store.collapseStatus);
    let customerList = useSelector(store => store.clients.clientList);
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();

    const handleClickMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    
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
        label: 'Salary/Hour',
        name: 'hourlySalary',
        sortable: true
        },
        {
        label: 'Labor',
        name: 'labor',
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
        {
        name: "actions",
        label: "Actions ",
        options: {
            viewColumns: false,
            filter: false,
            customBodyRender: (value, tableMeta, updateValue) => {
            return (
                <div>
                <IconButton
                    onClick={(e) => {
                    handleClickMenu(e);
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <StyledMenu
                    id={`customized-menu-${tableMeta.rowIndex}`}
                    key={tableMeta.rowData[0]}
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                >
                    <StyledMenuItem
                    onClick={() => {
                        handleCloseMenu();
                        alert('bloqueado')
                        /*alert(`Editar cuenta de ${tableMeta.rowData[tableMeta.rowData + 1]}`);*/
                    }}
                    >
                    <ListItemIcon>
                        <EditIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Edit" />
                    </StyledMenuItem>
                    <StyledMenuItem
                    onClick={() => {
                        handleCloseMenu();
                        alert(`Reiniciar contraseña de ${tableMeta.rowData[1]}`);
                    }}
                    >
                    <ListItemIcon>
                        <VpnKeyIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Delete" />
                    </StyledMenuItem>
                </StyledMenu>
                </div>
            );
            }
        }
        }
    ];  
    
    const title = <div className="row border-darken-4 ">
        <h3 className="blue-grey">Inactive Employees</h3>
        <a href={()=> false} onClick={() => dispatch(changeStatus('employee', true)) } className="success ml-auto "> Add <PersonAddRoundedIcon /></a>
        </div>
    return (
        <Collapse in={isOpen.inactiveEmployeesOpen}>
        <div className=" table-responsive">
            <AddEmployeeModal />
        <MuiDataTable title = {title} striped data={customerList} columns={columns} />
        </div>
        </Collapse>
    );
    }

export default InactiveEmployees;