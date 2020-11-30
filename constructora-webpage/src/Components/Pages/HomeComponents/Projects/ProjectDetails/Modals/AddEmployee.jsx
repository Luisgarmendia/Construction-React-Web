import React, { useState } from 'react';
import { Modal} from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../Reusables/Button';
import { changeStatus } from '../../../../../../Redux/Actions/Modals';
import MuiAlert from '@material-ui/lab/Alert';
import { changeSnackbarStatus } from '../../../../../../Redux/SnackbarsStatus';
import Snackbar from '@material-ui/core/Snackbar';
import MaterialTable from 'material-table';
import { useParams } from 'react-router-dom';
import { setEmployeesToProject } from '../../../../../../Redux/Actions/Projects';

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
        }
    
        
const AddProjectModal = () => {
    const dispatch = useDispatch();
    const listInactiveEmployees = useSelector(state => state.employees.inactives);
    const [inactive, setInactive] = useState(listInactiveEmployees);
    const show = useSelector(state => state.modalStatus.setEmployeesToProject);
    var snackStatus = useSelector(state => state.snackbar.project);
    const vertical = 'top';
    const horizontal = 'center';
    const [addList, setAddList] = useState([])
    const {id} = useParams();
    const col =  [

        {
            title: "Nickname",
            field: "nickName",
            editable: 'never',
            width: 150
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
        }
        ];

        const colSelected =  [

            {
                title: "Nickname",
                field: "nickName",
                editable: 'never',
                width: 150
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
                title: "Hourly salary",
                field: "salary",
                type: 'numeric',
                width: 150,
                validate: rowData => rowData.salary  < 1 ? { isValid: false, helperText: 'Salary cannot be zero' } : true, 
            }
            ];

    return(
        <div>
        <Modal
            show={show}
            onHide={() => dispatch(changeStatus('setEmployToPRojec', false))}
            size="xl"
            aria-labelledby="example-custom-modal-styling-title"
            centered={true}
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                Add employees to project
            </Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <div>
                <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        open={snackStatus}
                        onClose={() => dispatch(changeSnackbarStatus('projectWein', false))}
                        message="Error, check your credentials"
                        key={vertical + horizontal}
                    >
                    <Alert severity="error">save failed, try again!</Alert></Snackbar>

                    <MaterialTable
                                title="Inactive employees"
                                columns={col}
                                data={inactive}        
                                editable={{
                                    onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            const dataUpdate = [...inactive];
                                            const index = oldData.tableData.id;
                                            const add = dataUpdate[index];
                                            add.salary = 0;
                                            setAddList([...addList, add])
                                            dataUpdate.splice(index, 1);
                                            setInactive([...dataUpdate]);
                        
                                            resolve();
                                        }, 500);
                                    }),
                                    }}
                                />

                                {addList.length > 0 &&
                                <React.Fragment>
                                    <h2 className="mt-5">write the hourly wage</h2>
                                <MaterialTable
                                className="mt-2"
                                title="Employees selected"
                                columns={colSelected}
                                data={addList}
                                editable={{
                                    onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                        const dataUpdate = [...addList];
                                        const index = oldData.tableData.id;
                                        dataUpdate[index] = newData;
                                        setAddList([...dataUpdate]);

                                        resolve();
                                        }, 100)
                                    }),
                                    onRowDelete: oldData =>
                                        new Promise((resolve, reject) => {
                                            setTimeout(() => {
                                            const dataDelete = [...addList];
                                            const index = oldData.tableData.id;
                                            dataDelete.splice(index, 1);
                                            setAddList([...dataDelete]);

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
                                dispatch(setEmployeesToProject(addList, id));
                                setAddList([])}}
                            type="submit"
                            text="Save" />
                    </div>
            </div>
        </Modal.Body>
      </Modal>
    </div>
    )
}

export default AddProjectModal;