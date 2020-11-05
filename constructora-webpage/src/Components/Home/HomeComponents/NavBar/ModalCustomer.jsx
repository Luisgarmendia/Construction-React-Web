import React from 'react';
import Modal from 'react-modal';
import Input from '../../../Reusables/Input'
import './Styles/Modal.css'
import { useForm } from 'react-hook-form';
import Button from '../../../Reusables/Button';

const CustomerModal = (props) => {
    
    const{register, errors, handleSubmit} = useForm();
    const [Open, setOpen] = React.useState()

    React.useEffect(() => {
        setOpen(props.isOpen);
    }, [props.isOpen])

    const close = () => {
        setOpen(false)
    }
    
    return(
        <Modal
        isOpen={Open}>
             <div className="container modal-container">
                    <div className="row justify-content-center">
                        <button onClick={close} className="btn-alert"> Back </button>
                    <h2 className="text-uppercase m-auto">add Employee</h2>
                    </div>
                    <hr className="my-2"/>
                    <div className="row">
                    <div className="col-sm-4">

                        <div className="col-sm-4">
                            <h5>Name *</h5>
                            <Input 
                                type="text"
                                placeholder="Name"
                                name="name"
                                constant={register}
                                required={true}
                                messageError={errors?.name?.message} />
                        </div>

                        <div className="col-sm-4">
                            <h5>Contact Name *</h5>
                            <Input 
                                type="text"
                                placeholder="Contact Name"
                                name="contactName"
                                constant={register}
                                required={true}
                                messageError={errors?.contactName?.message} />
                        </div>

                        <div className="col-sm-6">
                            <h5>Contact Phone *</h5>
                            <Input 
                                type="text"
                                placeholder="Contact Phone"
                                name="contactPhone"
                                constant={register}
                                required={true}
                                messageError={errors?.contactPhone?.message} />
                        </div>

                        <div className="col-sm-6">
                            <h5>State *</h5>
                            <Input 
                                type="text"
                                placeholder="Email"
                                name="email"
                                constant={register}
                                required={true}
                                messageError={errors?.email?.message} />
                        </div>

                    <div className="row justify-content-center">
                            <div className="col-sm-6 col-lg-3 my-3">
                                <Button
                                    type="submit"
                                    text="Add" />
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </Modal>
    )
}

export default CustomerModal;