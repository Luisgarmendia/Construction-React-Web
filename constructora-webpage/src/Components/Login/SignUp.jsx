import React,{Fragment} from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Reusables/Input';
import Button from '../Reusables/Button'
import { Link,  Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../Redux/LoginDucks';
import './Styles/SignUp.css'
const SignUp = ( props ) => {
    const history = props
    const [next, setNext] = React.useState(false)
    const dispatch = useDispatch();
    const{register, errors, handleSubmit} = useForm();

        ////por aqui voy amor
    const onSubmit = (data) => {
       /*  console.log( `antes: ${next}`)
        setNext(true)
         */console.log( `data: ${data.firstName}`)
        dispatch(signUp(data, history))
    }

    return(
        <Fragment>
            <div className="d-flex justify-content-center align-item-center signup-container">
                <div className="signup-form text-center">
                    <h1 className="mb-5 font-weight-light text-uppercase">SignUp</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                        <div className="container">
                                
                            <div className="row">
                                <div className="col-sm">
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

                            <div className="row">
                                    <div className="col-sm-6">
                                            <Input
                                            type="text"
                                            placeholder="Phone"
                                            name="phone"
                                            constant={register}
                                            required={true}
                                            messageError={errors?.phone?.message}/>   
                                    </div>                     

                                    <div className="col-sm-6">
                                        <Input
                                        type="text"
                                        placeholder="Job Position"
                                        name="jobPosition"
                                        constant={register}
                                        required={true}
                                        messageError={errors?.jobPosition?.message}/>
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
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        constant={register}
                                        required={true}
                                        messageError={errors?.password?.message}/>
                                    </div>

                                    <div className="col-sm">
                                        <Input
                                        type="password"
                                        placeholder="Re - password"
                                        name="rePassword"
                                        constant={register}
                                        required={true}
                                        messageError={errors?.password?.message}/>
                                    </div>
                                </div>
                            </div>
                            
                            <Button
                            type="submit"
                            text="Sign Up" />

                        <p className="mt-3 font-weight-normal">Have an account? <Link  to="/SignIn"><strong>Signin Now!</strong></Link></p>
                    </form>                    
                    
                </div>
            </div>
        </Fragment>
    );
}

export default Redirect(SignUp);