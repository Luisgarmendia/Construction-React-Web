import React from 'react';
import { Modal} from 'react-bootstrap';
import Input from '../../../../Reusables/Input';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../Reusables/Button';
import { SetNewProject } from '../../../../../Redux/Actions/Projects';
import { changeStatus } from '../../../../../Redux/Actions/Modals';
import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
  } from '@material-ui/pickers';
  import MuiAlert from '@material-ui/lab/Alert';
  import { changeSnackbarStatus } from '../../../../../Redux/SnackbarsStatus';
  import Snackbar from '@material-ui/core/Snackbar';
  
  function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
  
const AddProjectModal = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.modalStatus.projectOpen)
    const customer = useSelector(state => state.clients.clientList)
    const {register, errors, handleSubmit, reset, control } = useForm();
    const onSubmit = (data) => {
        dispatch(SetNewProject(data));
    }
    var snackStatus = useSelector(state => state.snackbar.project)
    const vertical = 'top';
    const horizontal = 'center';

    const error =
    errors.hasOwnProperty("startDate") &&
    errors["startDate"].message;

    return(
        <>
        <Modal
            show={show}
            onHide={() => dispatch(changeStatus('project', false))}
            size="xl"
            aria-labelledby="example-custom-modal-styling-title"
            centered={true}
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                Create new project
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
                    <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h5>Name *</h5>
                    <Input
                        className="form-control mb-9" 
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        constant={register}
                        required={true}
                        requiredMessage="this is required"
                        messageError={errors?.name?.message} />
                    </div>

                    <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h5>Address *</h5>
                    <Input
                        className="form-control mb-9" 
                        type="text" 
                        placeholder="Address" 
                        name="address" 
                        constant={register}
                        required={true}
                        requiredMessage="this is required"
                        messageError={errors?.address?.message} />
                    </div>

                    <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h5>City *</h5>
                    <Input
                        className="form-control mb-9" 
                        type="text" 
                        placeholder="City" 
                        name="city" 
                        constant={register}
                        required={true}
                        requiredMessage="this is required"
                        messageError={errors?.city?.message} />
                    </div>

                    <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h5>Code</h5>
                    <Input
                        className="form-control mb-9" 
                        type="text" 
                        placeholder="Code" 
                        name="code" 
                        constant={register}
                        required={false} />
                        
                    </div>

                    <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h5>Customer *</h5>
                    <Controller
                    as={
                        <select
                        ref={register({
                            required: {
                                value: true,
                                message: "*-this field is required"
                            }
                        })}>
                        <option value=""></option>
                        {customer.map((item, index) =>
                        
                        <option key={index} value={item._id}>{item.name}</option>)}
                        </select>
                    }
                    control={control}
                    name="customer"
                    placeholder="Customer" />
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.customer?.message}
                        </span>     
                    </div>

                    <div className="col-xl-4 col-lg-6 col-sm-12">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Controller
                            as={
                            <KeyboardDatePicker
                                fullWidth
                                autoOk
                                error={!!error}
                                inputVariant="outlined"
                                variant="inline"
                                format="dd/MM/yyyy"
                                label="Start Date"
                                helperText={error}
                            />
                            }
                            control={control}
                            name="startDate"
                            placeholder="Start Date"
                        />
                    </MuiPickersUtilsProvider>          
                        {errors.func && <p style={{color:'red'}}> {errors.startDate.message}</p> }       
                    </div>

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

export default AddProjectModal;