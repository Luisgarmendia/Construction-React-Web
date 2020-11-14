import React from 'react';

const Input = (props) => {
    return(
        <div className="mb-3">
            <input 
                type={props.type}
                placeholder={props.placeholder}
                className="form-control rounded-pill form-control-lg "
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
        </div>
    );
}

export default Input;