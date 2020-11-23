import React,{Fragment} from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Reusables/Input';
import Button from '../Reusables/Button'
import { Link,  Redirect, withRouter} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../Redux/LoginDucks';
import './Styles/SignUp.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { changeSnackbarStatus } from '../../Redux/SnackbarsStatus';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
const SignUp = ( props ) => {
    const history = props.history
    const dispatch = useDispatch();
    const{register, errors, handleSubmit} = useForm();
    var snackStatus = useSelector(state => state.snackbar.signIn)
    const vertical = 'bottom';
    const horizontal = 'center';

    const onSubmit = (data) => {
        data.jobPosition = "Director"
        dispatch(signUp(data, history))
        closeSnack();
    }

    const closeSnack = () => {
        dispatch(changeSnackbarStatus('signup', false));
    }

    return(
        <Fragment>
            <Snackbar
                autoHideDuration={6000}
                anchorOrigin={{ vertical, horizontal }}
                open={snackStatus}
                onClose={() => closeSnack()}
                message="Error, check your credentials"
                key={vertical + horizontal}
            >
            <Alert severity="error">Error, check your credentials!</Alert></Snackbar>

            <div className="d-flex justify-content-center align-item-center signup-container">
                <div className="signup-form text-center">
                    <h1 className="mb-5 font-weight-light text-uppercase">SignUp</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                        <div className="container ">
                                
                        <span className="mr-auto mb-5">You register as a director</span>
                        <h4 className="mr-auto my-1">Personal Data</h4>
                            <div className="row"> 
                                <div className= "col-sm">
                                    <Input
                                    type="text"
                                    placeholder="First name"
                                    name="firstName"
                                    constant={register}
                                    required={true}
                                    messageError={errors?.firstName?.message}/>
                                </div>

                                <div className="col-sm">
                                    <Input
                                    type="text"
                                    placeholder="Last name"
                                    name="lastName"
                                    constant={register}
                                    required={true}
                                    messageError={errors?.lastName?.message}/>
                                </div>
                                

                            </div>

                                <Input
                                type="text"
                                placeholder="Email"
                                name="email"
                                constant={register}
                                required={true}
                                messageError={errors?.email?.message}/>

                            </div>

                            <div className="container">

                                <div className="row">
                            <div className="col-sm">
                                            <Input
                                            type="text"
                                            placeholder="Phone"
                                            name="phone"
                                            constant={register}
                                            required={true}
                                            messageError={errors?.phone?.message}/>   
                                    </div>  
                                    <div className="col-sm">
                                        <Input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        constant={register}
                                        required={true}
                                        messageError={errors?.password?.message}/>
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <h4 className="mr-auto mb-2">Company Data</h4>
                                <div className="row">
                                    <div className="col-sm">
                                        <Input
                                        type="text"
                                        placeholder="Company name"
                                        name="companyName"
                                        constant={register}
                                        required={true}
                                        messageError={errors?.companyName?.message}/>
                                    </div>

                                    <div className="col-sm">
                                        <Input
                                        type="text"
                                        placeholder="Description"
                                        name="companyDescription"
                                        constant={register}
                                        required={true}
                                        messageError={errors?.companyDescription?.message}/>
                                    </div>
                                </div>
                            </div>
                            
                            <Button
                            type="submit"
                            text="Sign Up" />

                        <p className="mt-3 font-weight-normal">Have an account? <Link  to="/"><strong>Signin Now!</strong></Link></p>
                    </form>                    
                    
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(SignUp);