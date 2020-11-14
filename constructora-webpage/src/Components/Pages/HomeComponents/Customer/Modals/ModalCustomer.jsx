import React from 'react';
import { Modal} from 'react-bootstrap';
import Input from '../../../../Reusables/Input';
import { useForm } from 'react-hook-form';
import Button from '../../../../Reusables/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setClient } from '../../../../../Redux/Actions/Client';
import { changeStatus } from '../../../../../Redux/Actions/Modals';

const CustomerForm = (props) => {
    
    const{register, errors, handleSubmit} = useForm();
    const isOPen = useSelector(store => store.modalStatus.customerOpen)
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(setClient(data))
    }

    return(
        <Modal
            show={isOPen}
            onHide={() => dispatch(changeStatus('customer', false))}
            size="xl"
            aria-labelledby="example-custom-modal-styling-title"
            centered={true}>
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title" className="text-upper-case content-justify-center darken-4">
                New Customer
            </Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <div className="container modal-container">
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="form-group">
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
                            <h5>Contact name *</h5>
                            <Input 
                                type="text"
                                placeholder="Contact name"
                                name="contactName"
                                constant={register}
                                required={true}
                                messageError={errors?.contactName?.message} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <h5>Contact phone *</h5>
                            <Input
                                type="text"
                                placeholder="Contact phone"
                                name="contactPhone"
                                constant={register}
                                required={true}
                                messageError={errors?.contactPhone?.message} />
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
                    </div>

                    <div className="row justify-content-center">
                            <div className="col-sm-6 col-lg-3 my-3">
                                <Button
                                    type="submit"
                                    text="Add customer" />
                            </div>
                    </div>

                </form>
            </div>

        </Modal.Body>
        </Modal>
    )
}

export default CustomerForm;   