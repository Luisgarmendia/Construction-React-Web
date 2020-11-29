import React from 'react';
import { Modal} from 'react-bootstrap';
import Input from '../../../../Reusables/Input';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../Reusables/Button';
import { setNewUsers } from '../../../../../Redux/Actions/User';
import { changeStatus } from '../../../../../Redux/Actions/Modals';
import MuiAlert from '@material-ui/lab/Alert';
import { changeSnackbarStatus } from '../../../../../Redux/SnackbarsStatus';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddUser = (props) => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.modalStatus.userOPen)
    const customer = useSelector(state => state.clients.clientList)
    const {register, errors, handleSubmit, reset, control } = useForm();
    const onSubmit = (data) => {
        dispatch(setNewUsers(data));
    }
    var snackStatus = useSelector(state => state.snackbar.user)
    const vertical = 'top';
    const horizontal = 'center';

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
        <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={snackStatus}
                onClose={() => dispatch(changeSnackbarStatus('projectWein', false))}
                message="Error, check your credentials"
                key={vertical + horizontal}
            >
            <Alert severity="error">save failed, try again!</Alert></Snackbar>
            <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                <div className="container">
                    <div className="row">
                            <div className="col-sm-6">
                                <h5>First name *</h5>
                                <Input 
                                    type="text"
                                    placeholder="First name"
                                    name="firsName"
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
                               <select 
                               name="role"
                               constant={register}
                               required={true}
                               >
                                <option value="1">Director</option>
                                <option value="2">Operation</option>
                                <option value="3">Administration</option>
                                <option value="4">Project Administrator</option>
                                <option value="5">Project Analyst</option>
                                <option value="6">Project Manager</option>
                                <option value="7">Supervisor</option>
                                <option value="8">Employee</option></select>
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