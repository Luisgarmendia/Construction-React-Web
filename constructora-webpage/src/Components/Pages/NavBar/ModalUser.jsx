import React from 'react';
import Modal from 'react-modal';
import Input from '../../Reusables/Input'
import './Styles/Modal.css'
import { useForm } from 'react-hook-form';
import Button from '../../Reusables/Button';
import { changeStatus } from '../../../Redux/Actions/Modals';
import { useDispatch, useSelector } from 'react-redux';

const ModalUser = (props) => {
    const{register, errors, handleSubmit} = useForm();
    const isOPen = useSelector(store => store.modalStatus)
    const dispatch = useDispatch();

    return(
            <Modal 
            isOpen={isOPen.userOPen}>
                <div className="container modal-container">
                    <div className="row justify-content-center">
                        <button onClick={()=> dispatch(changeStatus('user', false))} className="btn-alert"> Back </button>
                    <h2 className="text-uppercase m-auto">add User</h2>
                    </div>
                    <hr className="my-2"/>
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
                            <h5>Phone number *</h5>
                            <Input 
                                type="text"
                                placeholder="Phone number"
                                name="phoneNumber"
                                constant={register}
                                required={true}
                                messageError={errors?.phoneNumber?.message} />
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

                        <div className="col-sm-6 col-lg-4">
                            <h5>Job position</h5>
                            <Input 
                                type="text"
                                placeholder="Job position<"
                                name="jobposition"
                                constant={register}
                                required={false}
                                messageError={errors?.jobposition?.message} />
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <h5>Password *</h5>
                            <Input 
                                type="password"
                                placeholder="Password"
                                name="password"
                                constant={register}
                                required={true}
                                messageError={errors?.password?.message} />
                        </div>

                        <div className="col-sm-6 col-lg-4">
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

                    <div className="row justify-content-center">
                            <div className="col-sm-6 col-lg-3 my-3">
                                <Button
                                    type="submit"
                                    text="Add" />
                            </div>
                    </div>
                </div>
            </Modal>
    )
}

export default ModalUser;