import React from 'react';
import { Modal} from 'react-bootstrap';
import Input from '../../../../Reusables/Input';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../Reusables/Button';
import { changeStatus } from '../../../../../Redux/Actions/Modals';
import { setNewEmployee } from '../../../../../Redux/Actions/Employees';
import { MenuItem, TextField } from '@material-ui/core';

const AddEmployeeModal = (props) => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.modalStatus.employeeOpen)
    const {register, errors, handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        dispatch(setNewEmployee(data));
    }


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
                                type="text"
                                placeholder="Number phone"
                                name="phone"
                                constant={register}
                                required={true}
                                messageError={errors?.phone?.message} />
                        </div>

                        <div className="col-sm-4">
                            <h5>Alternative phone</h5>
                            <Input 
                                type="text"
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
                                required={true}
                                messageError={errors?.email?.message} />
                        </div>

                        <div className="col-sm-4">
                            <h5>Asign project *</h5>
                            <Input 
                                type="text"
                                placeholder="Asign project"
                                name="assignedProjects"
                                constant={register}
                                required={true}
                                messageError={errors?.assignedProjects?.message} />
                        </div>

                        <div className="col-sm-4">
                            <h5>Hotel</h5>
                            <Input 
                                type="text"
                                placeholder="Hotel"
                                name="hotel"
                                constant={register}
                                required={true}
                                messageError={errors?.hotel?.message} />
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
                                type="text"
                                placeholder="Hourly wage"
                                name="hourlySalary"
                                constant={register}
                                required={false}
                                messageError={errors?.hourlySalary?.message} />
                        </div>

                    </div>
                        <div className="col-4 mx-auto">
                            <Button
                            type="submit"
                            text="Log in" />
                        </div>
                </div>    
            </form> 
        </Modal.Body>
      </Modal>
    </>
    )
}

export default AddEmployeeModal;