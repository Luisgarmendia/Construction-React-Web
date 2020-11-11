import React, { useState } from "react";
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

const data = [
  {
    idProfile: 1,
    username: "Admin",
    password: null,
    state: true,
    fullName: "Admin",
    email: "admin@admin.com",
    phone: "",
    idRole: 1,
    role: "Administrador"
  },
  {
    idProfile: 2,
    username: "Pepe",
    password: null,
    state: false,
    fullName: "El Pepe",
    email: "elpepe@pepe.com",
    phone: "+569",
    idRole: 1,
    role: "Administrador"
  },
  {
    idProfile: 3,
    username: "Sech",
    password: null,
    state: true,
    fullName: "Etesech",
    email: "etesech@sech.com",
    phone: "+569",
    idRole: 1,
    role: "Administrador"
  }
];

export default function UserList() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const columns = [
    {
      name: "idProfile",
      options: {
        display: false,
        viewColumns: false,
        filter: false
      }
    },
    {
      name: "fullName",
      label: "Nombre"
    },
    {
      name: "username",
      label: "Nombre de usuario"
    },
    {
      name: "email",
      label: "Correo"
    },
    {
      name: "phone",
      label: "Telefono"
    },
    {
      name: "state",
      label: "Estado",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return tableMeta.rowData[5] ? "Habilitado" : "Deshabilitado";
        }
      }
    },
    {
      name: "role",
      label: "Tipo de usuario"
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
  return (
    <div className="App">
      <MuiDataTable striped={true} data={data} columns={columns} />
    </div>
  );
}
