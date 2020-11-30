import React from 'react';
import { Modal} from 'react-bootstrap';
import Input from '../../../../Reusables/Input';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../Reusables/Button';
import { changeStatus } from '../../../../../Redux/Actions/Modals';
import { setNewEmployee } from '../../../../../Redux/Actions/Employees';
import { MenuItem, TextField } from '@material-ui/core';
import SelectBox from '../../../../Reusables/SelectBox';
import MuiAlert from '@material-ui/lab/Alert';
import { changeSnackbarStatus } from '../../../../../Redux/SnackbarsStatus';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const AddEmployeeModal = (props) => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.modalStatus.employeeOpen);
    const hotelList = useSelector(state => state.hotels);
    const projectList = useSelector(state => state.projects.actives)
    const {register, errors, handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        dispatch(setNewEmployee(data));
    }

    var snackStatus = useSelector(state => state.snackbar.employees)
    const vertical = 'top';
    const horizontal = 'center';

    return(
        <>
        <Modal
            show={show}
            onHide={() => dispatch(changeStatus('employee', false))}
            size="xl"
            aria-labelledby="example-custom-modal-styling-title"
            centered={true}>
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                Create new Employee
            </Modal.Title>
            </Modal.Header>
        <Modal.Body>
        <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={snackStatus}
                onClose={() => dispatch(changeSnackbarStatus('employeeW', false))}
                message="Error, check your credentials"
                key={vertical + horizontal}
            >
            <Alert severity="error">save failed, try again!</Alert></Snackbar>
            <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <h5>Nick name</h5>
                            <Input 
                                type="text"
                                placeholder="Nick name"
                                name="nickName"
                                constant={register}
                                required={false}/>
                        </div>

                        <div className="col-sm-4">
                            <h5>First name *</h5>
                            <Input 
                                type="text"
                                placeholder="First name"
                                name="firstName"
                                constant={register}
                                required={true}
                                messageError={errors?.firstName?.message} />
                        </div>

                        <div className="col-sm-4">
                            <h5>Last name *</h5>
                            <Input 
                                type="text"
                                placeholder="Last name"
                                name="lastName"
                                constant={register}
                                required={true}
                                messageError={errors?.lastName?.message} />
                        </div>

                        <div className="col-sm-4">
                            <h5>Number phone *</h5>
                            <Input 
                                type="number"
                                placeholder="Number phone"
                                name="phone"
                                constant={register}
                                required={true}
                                messageError={errors?.phone?.message} />
                        </div>

                        <div className="col-sm-4">
                            <h5>Alternative phone</h5>
                            <Input 
                                type="number"
                                placeholder="Alternative phone"
                                name="phone2"
                                constant={register}
                                required={false}
                                messageError={errors?.phone2?.message} />
                        </div>
                        

                        <div className="col-sm-4">
                            <h5>Email</h5>
                            <Input 
                                type="text"
                                placeholder="Email"
                                name="email"
                                constant={register}
                                required={false}
                                messageError={errors?.email?.message} />
                        </div>

                        <div className="col-sm-4">
                            <h5>Asign project *</h5>
                            <SelectBox
                            name="Project"
                            placeholder="Select a project"
                            constant={register}
                            required={true}
                            list={projectList}
                            messageError={errors?.SelectBox?.message}
                             />
                        </div>

                        <div className="col-sm-4">
                            <h5>Hotel</h5>
                            <SelectBox
                            name="hotel"
                            constant={register}
                            required={true}
                            list={hotelList.hotels} />
                        </div>

                        <div className="col-sm-4">
                            <h5>Room</h5>
                            <Input 
                                type="text"
                                placeholder="Room"
                                name="room"
                                constant={register}
                                required={true}
                                messageError={errors?.room?.message} />
                        </div>

                        <div className="col-sm-4">
                            <h5>Address *</h5>
                            <Input 
                                type="text"
                                placeholder="Address"
                                name="address"
                                constant={register}
                                required={true}
                                messageError={errors?.address?.message} />
                        </div>

                        <div className="col-sm-4">
                            <h5>City *</h5>
                            <Input 
                                type="text"
                                placeholder="State"
                                name="city"
                                constant={register}
                                required={true}
                                messageError={errors?.city?.message} />
                        </div>

                        <div className="col-sm-4">
                            <h5>Hourly wage *</h5>
                            <Input 
                                type="number"
                                placeholder="Hourly wage"
                                name="hourlySalary"
                                constant={register}
                                required={true}
                                messageError={errors?.hourlySalary?.message} />
                        </div>

                    </div>
                        <div className="col-4 mx-auto">
                            <Button
                            type="submit"
                            text="Save" />
                        </div>
                </div>    
            </form> 
        </Modal.Body>
      </Modal>
    </>
    )
}

export default AddEmployeeModal;