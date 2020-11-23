import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { Collapse } from 'react-bootstrap';
import { changeStatus } from '../../../../../../Redux/Actions/Modals';

const CheckingCollapse = () => {
    const isOpen = useSelector(state => state.collapseStatus.checkListEmployees);
    const employeesList = useSelector(state => state.projects.employeesByProject);
    const dispatch = useDispatch();
    const [data, setData] = useState([
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]);
    
    const dat = {
            columns: [

            {
                title: "Nickname",
                field: "nickName",
                editable: 'never',
                width: 100
            },
            {
                title: "First name",
                field: 'firstName',
                editable: 'never',
                sort: "asc",
                width: 150
            },
            {
                title: "Last name",
                field: "lastName",
                editable: 'never',
                sort: "asc",
                width: 150
            },
            {
                title: "Salary",
                field: "salary",
                sort: "asc",
                width: 150
            },
            {
                title: "In",
                field: "in",
                sort: "asc",
                width: 150
            },
            {
                title: "Out",
                field: "out",
                sort: "asc",
                width: 150
            },
            ],
            rows: employeesList
        };

        return(
            <Collapse in={isOpen}>
                <div>
                    <MaterialTable
                        title="Check assistance"
                        columns={dat.columns}
                        data={[
                            { nickName: 'Mehmet', firstName: 'Baran', lastName: 1987, salary: 63 },
                            { nickName: 'Zerya Betül', firstName: 'Baran', lastName: 2017, salary: 34 },
                        ]}        
                        actions={[
                            {
                            icon: 'check',
                            tooltip: 'Check employee',
                            onClick: (event, rowData) => alert("You saved " + rowData.birthYear)
                            }
                        ]}
                        editable={{
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                    const dataUpdate = [...data];
                                    const index = oldData.tableData.id;
                                    dataUpdate[index] = newData;
                                    setData([...dataUpdate]);
                        
                                    resolve();
                                    }, 1000)
                                }),
                            }}
                        />
                </div>
            </Collapse>
        )
}


export default CheckingCollapse;