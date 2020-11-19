import React, { useState  } from 'react';
import { Collapse } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'; 
import { ListItemIcon, ListItemText, IconButton } from "@material-ui/core";
import MuiDataTable from "mui-datatables";
import EditIcon from "@material-ui/icons/Edit";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ReplayIcon from "@material-ui/icons/Replay";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import BlockIcon from "@material-ui/icons/Block";
import CheckIcon from "@material-ui/icons/Check";
import MenuIcon from "@material-ui/icons/Menu";
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import { StyledMenu, StyledMenuItem } from "../../Projects/CollapseTables/StyledMenu";
import { changeStatus } from '../../../../../Redux/Actions/Modals';
import CustomerForm from '../Modals/ModalCustomer';

const CustomerList = (props) => {
  const isOpen = useSelector(store => store.collapseStatus);
  let customerList = useSelector(store => store.clients.clientList);
  const [anchorEl, setAnchorEl] = useState(null);
  const modalOpen = useSelector(store => store.modalStatus.employeeOpen);
  const dispatch = useDispatch();

  const handleClickMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  
  const columns = [

    {
      label: 'Name',
      name: 'name',
      sortable: true
    },
    {
      label: 'Contact Name',
      name: 'contactName',
      sortable: true
    },
    {
      label: 'Contact Phone',
      name: 'contactPhone',
      sortable: true
    },
    {
      label: 'Email',
      name: 'email',
      sortable: true
    },
    {
      name: "actions",
      label: "Acciones",
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
                    alert(`Editar cuenta de ${tableMeta.rowData[tableMeta.rowData + 1]}`);
                  }}
                >
                  <ListItemIcon>
                    <EditIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Editar" />
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
                  <ListItemText primary="Reiniciar contraseña" />
                </StyledMenuItem>
                <StyledMenuItem
                  onClick={(e) => {
                    handleCloseMenu();
                    alert(`Cambiar permisos de ${tableMeta.rowData[1]}`);
                  }}
                >
                  <ListItemIcon>
                    <ReplayIcon fontSize="small" />
                    <PermContactCalendarIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Cambiar Permisos" />
                </StyledMenuItem>
                {tableMeta.rowData[5] ? (
                  <StyledMenuItem
                    onClick={() => {
                      handleCloseMenu();
                      alert(`Deshabilitar cuenta de ${tableMeta.rowData[1]}`);
                    }}
                  >
                    <ListItemIcon>
                      <BlockIcon primary="small" />
                    </ListItemIcon>
                    <ListItemText primary="Deshabilitar Cuenta" />
                  </StyledMenuItem>
                ) : (
                  <StyledMenuItem
                    onClick={() => {
                      handleCloseMenu();
                      alert(`Habilitar cuenta de ${tableMeta.rowData[1]}`);
                    }}
                  >
                    <ListItemIcon>
                      <CheckIcon primary="small" />
                    </ListItemIcon>
                    <ListItemText primary="Habilitar Cuenta" />
                  </StyledMenuItem>
                )}
              </StyledMenu>
            </div>
          );
        }
      }
    }
  ];  
  
  const title = <div className="row border-darken-4 ">
    <h3 className="blue-grey">Customers</h3>
    <a href={()=> false} onClick={()=> dispatch(changeStatus('customer', true))} className="success ml-auto "> Add <PersonAddRoundedIcon /></a>
      </div>
  return (
      <Collapse in={isOpen.customerOpen}>
    <div className=" table-responsive">
      <MuiDataTable title = {title} striped data={customerList} columns={columns} />
      <CustomerForm />
      </div>
      </Collapse>
  );
}

export default CustomerList;