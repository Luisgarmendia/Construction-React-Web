import React, { Fragment } from 'react';

const Input = (props) => {
    return(
        <Fragment>
            <input 
                type={props.type}
                placeholder={props.placeholder}
                className="form-control rounded-pill form-control-lg mt-3"
                name={props.name}
                ref={props.constant({
                    required:{
                        value: props.required,
                        message: "*-this field is required"
                    },
                })}
                >
            </input>
            
            { props.required ? (
            <span className="text-danger text-small d-block mb-2">
                {props.messageError}
            </span>
            ) : <h6></h6>}
        </Fragment>
    );
}

export default Input;