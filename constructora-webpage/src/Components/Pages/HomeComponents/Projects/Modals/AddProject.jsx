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

const AddProjectModal = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.modalStatus.projectOpen)
    const customer = useSelector(state => state.clients.clientList)
    const {register, errors, handleSubmit, reset, control } = useForm();
    const onSubmit = (data) => {
        dispatch(SetNewProject(data));
    }

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
                        <select name="customer" 
                        ref={register({
                            required: "select one option"
                        })}>
                        <option value=""></option>
                        {customer.map((item, index) =>
                        
                        <option key={index} value={item._id}>{item.name}</option>)}
                        </select>
                        {errors.func && <p style={{color:'red'}}> {errors.customer.message}</p> }       
                    </div>

                    <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h5>Project start *</h5>
                        <Controller
                        as={<MuiPickersUtilsProvider utils={DateFnsUtils}>
                                
                        <KeyboardDatePicker
                            autoOk
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>}
                        control={control}
                        valueName="startDate" // DateSelect value's name is selected
                        onChange={([selected]) => selected}
                        name="startDate"
                        className="input"
                        placeholderText="Select date"
                        />
                        {errors.func && <p style={{color:'red'}}> {errors.startDate.message}</p> }       
                    </div>

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

export default AddProjectModal;