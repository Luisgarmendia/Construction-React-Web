import React, { useState  } from 'react';
import { Collapse } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Datatable from 'react-data-table-component';
import { ListItemIcon, ListItemText, IconButton } from "@material-ui/core";
import MuiDataTable from "mui-datatables";
import EditIcon from "@material-ui/icons/Edit";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ReplayIcon from "@material-ui/icons/Replay";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import BlockIcon from "@material-ui/icons/Block";
import CheckIcon from "@material-ui/icons/Check";
import MenuIcon from "@material-ui/icons/Menu";
import { StyledMenu, StyledMenuItem } from "./StyledMenu";

const CustomerList = (props) => {
  const isOpen = useSelector(store => store.collapseStatus);
  let customerList = useSelector(store => store.clients.clientList);
  
  const [anchorEl, setAnchorEl] = useState(null);

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
                    alert(`Editar cuenta de ${tableMeta.rowData[1]}`);
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

  const dataTable = {
    columns,
    customerList
  }


  
  return (
      <Collapse in={isOpen.customerOpen}>

    <div className="mx-2 table-responsive">
    <MuiDataTable striped={true} data={customerList} columns={columns} />
      </div>
      </Collapse>
  );
}

export default CustomerList;