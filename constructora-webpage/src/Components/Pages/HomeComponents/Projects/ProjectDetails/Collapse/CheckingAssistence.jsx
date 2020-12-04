import React, { useState } from 'react';

import {withRouter} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { Collapse } from 'react-bootstrap';
import {setCheckedAssistence} from '../../../../../../Redux/Actions/CheckingAssistence'
import { changeStatus } from '../../../../../../Redux/Actions/Modals';
import Button from '../../../../../Reusables/Button';

const CheckingCollapse = (props) => {
    const { proyectID } = props;
    const { history } = props;
    const isOpen = useSelector(state => state.collapseStatus.checkListEmployees);
    const a = useSelector(state => state.projects.projectDetail.employees);
    const [employeesList, setEmployeeList] = useState(a);
    const dispatch = useDispatch();
    
    const [checkedList, setCheckedList] = useState([]);
    const dat = {
            columns: [
            {
                title: "Nickname",
                field: "_id.nickName",
                editable: 'never',
                width: 100
            },
            {
                title: "First name",
                field: '_id.firstName',
                editable: 'never',
                sort: "asc",
                width: 150
            },
            {
                title: "Last name",
                field: "_id.lastName",
                editable: 'never',
                sort: "asc",
                width: 150
            },
            {
                title: "In",
                field: "in",
                sort: "asc",    
                type: 'time',
                width: 150
            },
            {
                title: "Out",
                field: "out",
                sort: "asc",  
                type: 'time',
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
                        data={employeesList}   
                        editable={{
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        const dataUpdate = [...employeesList];
                                        const index = oldData.tableData.id;
                                        dataUpdate.splice(index, 1);
                                        const add = newData;
                                        setEmployeeList([...dataUpdate]);
                                        setCheckedList([...checkedList,add])
                                        resolve();
                                    }, 100)
                                }),
                            }}
                        />

                        {checkedList.length > 0 &&
                                <React.Fragment>
                                    <h2 className="mt-5">Checked employees</h2>
                                <MaterialTable
                                className="mt-2"
                                title="Employees selected"
                                columns={dat.columns}
                                data={checkedList}
                                editable={{
                                    onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                        const dataUpdate = [...checkedList];
                                        const index = oldData.tableData.id;
                                        dataUpdate[index] = newData;
                                        setCheckedList([...dataUpdate]);
                                        resolve();
                                        }, 100)
                                    }),
                                    onRowDelete: oldData =>
                                        new Promise((resolve, reject) => {
                                            setTimeout(() => {
                                                const dataDelete = [...checkedList];
                                                const index = oldData.tableData.id;
                                                const add = dataDelete[index];
                                                dataDelete.splice(index, 1);
                                                setCheckedList([...dataDelete]);
                                                setEmployeeList([...employeesList,add]);
                                                resolve();
                                            }, 100)
                                        }),
                                    }}
                                />
                                </React.Fragment>
                            }

                    <div className="col-4 my-2 mx-auto">
                    <Button
                            onClick={function(){
                                if(checkedList.length>0){
                                    dispatch(setCheckedAssistence(proyectID, checkedList, history ));
                                    setCheckedList([]);
                                    }
                                }
                            }
                            type="submit"
                            text="Save" />
                    </div>
                </div>
            </Collapse>
        )
}


export default withRouter(CheckingCollapse);