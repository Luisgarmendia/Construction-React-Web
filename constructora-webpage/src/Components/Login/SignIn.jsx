import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch } from 'react-redux';
import { signIn } from '../../Redux/LoginDucks';
import './Styles/SignIn.css'
import {
    Link,
    withRouter
  } from "react-router-dom";
import Input from '../Reusables/Input';
import Button from '../Reusables/Button';
import {verifyLogin} from '../../Redux/Actions/IsLogin'

const SignIn = (props) => {
    const { history } = props;
    const dispatch = useDispatch();

    const {register, errors, handleSubmit} = useForm();
    const onSubmit = (data) => {
        dispatch(signIn(data.email, data.password, history))
    }
    
    React.useEffect(()=> (dispatch(verifyLogin(history))))
    return(
    <Fragment>
        <div className="d-flex justify-content-center align-item-center login-container">
            <div className="login-form text-center">
                <h1 className="mb-5 font-weight-light text-uppercase">SignIn</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                <div className="col-xl-4 col-lg-6 col-sm-12"></div>
            <Input 
                type="text"
                placeholder="Email"
                name="email"
                constant={register}
                required={true}
                requiredMessage="Email is required"
                messageError={errors?.email?.message} />


                <Input
                className="form-control mb-9" 
                type="password" 
                placeholder="Password" 
                name="password" 
                constant={register}
                required={true}
                requiredMessage="password is required"
                messageError={errors?.password?.message} />

            <div className="forgot-link form-group d-flex justify-content-between  align-items-center">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="remember" />
                        <label className="form-check-label" for="remember">remember password</label>
                </div>
                <Link to="/">forgot password?</Link>
            </div>
                <Button
                    type="submit"
                    text="Log in" />
            <p className="mt-3 font-weight-normal">Don't have an account? <Link  to="/SignUp"><strong>Register Now!</strong></Link></p>

        </form>
            </div>
        </div>
    </Fragment>
    );
}

export default withRouter(SignIn);