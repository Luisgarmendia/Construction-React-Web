import React from 'react';
import { Modal} from 'react-bootstrap';
import Input from '../../../../Reusables/Input';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../Reusables/Button';
import { SetNewProject } from '../../../../../Redux/Actions/Projects';
import { changeStatus } from '../../../../../Redux/Actions/Modals';

const AddUser = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.modalStatus.userOPen)
    const customer = useSelector(state => state.clients.clientList)
    const {register, errors, handleSubmit, reset, control } = useForm();
    const onSubmit = (data) => {
        dispatch(SetNewProject(data));
    }

    return(
        <>
        <Modal
            show={show}
            onHide={() => dispatch(changeStatus('user', false))}
            size="xl"
            aria-labelledby="example-custom-modal-styling-title"
            centered={true}
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title text-uppercase">
                Create new user
            </Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                <div className="container">
                    <div className="row">
                            <div className="col-sm-6">
                                <h5>First name *</h5>
                                <Input 
                                    type="text"
                                    placeholder="First name"
                                    name="fistName"
                                    constant={register}
                                    required={true}
                                    messageError={errors?.fistName?.message} />
                            </div>

                            <div className="col-sm-6">
                                <h5>Last name *</h5>
                                <Input 
                                    type="text"
                                    placeholder="Last name"
                                    name="lastName"
                                    constant={register}
                                    required={true}
                                    messageError={errors?.lastName?.message} />
                            </div>

                            <div className="col-sm-6">
                                <h5>Email *</h5>
                                <Input 
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    constant={register}
                                    required={true}
                                    messageError={errors?.email?.message} />
                            </div>

                            <div className="col-sm-6">
                                <h5>Role</h5>
                                <Controller
                                as={<select name="role" 
                                ref={register({
                                    required: "select one option"
                                })}>
                                <option value=""></option>
                                {customer.map((item, index) =>
                                
                                <option key={index} value={item._id}>{item.name}</option>)}
                                </select>  }
                                control={control}
                                valueName="startDate" // DateSelect value's name is selected
                                onChange={([selected]) => selected}
                                name="startDate"
                                className="input"
                                placeholderText="Select date"
                                />
                            </div>

                            <div className="col-sm-6">
                                <h5>Password *</h5>
                                <Input 
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    constant={register}
                                    required={true}
                                    messageError={errors?.password?.message} />
                            </div>

                            <div className="col-sm-6">
                                <h5>Re password *</h5>
                                <Input 
                                    type="password"
                                    placeholder="Re password"
                                    name="repassword"
                                    constant={register}
                                    required={true}
                                    messageError={errors?.repassword?.message} />
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

export default AddUser;