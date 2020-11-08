import React from 'react';
import Modal from 'react-modal';
import Input from '../../Reusables/Input'
import './Styles/Modal.css'
import { useForm } from 'react-hook-form';
import Button from '../../Reusables/Button';
import { changeStatus } from '../../../Redux/Actions/Modals';
import { useDispatch, useSelector } from 'react-redux';

const ModalProject = (props) => {
    const{register, errors, handleSubmit} = useForm();
    const isOpen = useSelector(store => store.modalStatus);
    const dispatch = useDispatch();

    return(
            <Modal 
            isOpen={isOpen.projectOpen}>
                <div className="container modal-container">
                    <div className="row justify-content-center">
                        <button onClick={()=> dispatch(changeStatus('project', false))} className="btn-alert"> Back </button>
                    <h2 className="text-uppercase m-auto">add Project</h2>
                    </div>
                    <hr className="my-2"/>
                    <div className="row">
                        <div className="col-sm-6">
                            <h5>Name *</h5>
                            <Input 
                                type="text"
                                placeholder="Name"
                                name="name"
                                constant={register}
                                required={true}
                                messageError={errors?.name?.message} />
                        </div>

                        <div className="col-sm-6">
                            <h5>Addess *</h5>
                            <Input 
                                type="text"
                                placeholder="Address"
                                name="address"
                                constant={register}
                                required={true}
                                messageError={errors?.address?.message} />
                        </div>

                        <div className="col-sm-6">
                            <h5>City *</h5>
                            <Input 
                                type="text"
                                placeholder="Address"
                                name="address"
                                constant={register}
                                required={true}
                                messageError={errors?.address?.message} />
                        </div>

                        <div className="col-sm-6">
                            <h5>State *</h5>
                            <Input 
                                type="text"
                                placeholder="State"
                                name="state"
                                constant={register}
                                required={true}
                                messageError={errors?.state?.message} />
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <h5>Code</h5>
                            <Input 
                                type="text"
                                placeholder="Code"
                                name="code"
                                constant={register}
                                required={false}
                                messageError={errors?.code?.message} />
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <h5>Status *</h5>
                            <Input 
                                type="text"
                                placeholder="Status"
                                name="status"
                                constant={register}
                                required={true}
                                messageError={errors?.status?.message} />
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <h5>Start Date *</h5>
                            <Input 
                                type="text"
                                placeholder="Start Date"
                                name="date"
                                constant={register}
                                required={true}
                                messageError={errors?.date?.message} />
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

export default ModalProject;