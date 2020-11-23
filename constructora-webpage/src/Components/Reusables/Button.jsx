import React from 'react';
import './Button.css';

const Button = (props) => {
    return(
        <button type={props.type} onClick={props.onClick} className="col btn btn-dark-moon btn-rounded  text-uppercase mb-2">
            {props.text}
        </button>
    );
}

export default Button;