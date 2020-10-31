import React from 'react';

const Button = (props) => {
    return(
        <button type={props.type} onClick={props.onClick} className="col btn btn-dark-moon btn-rounded  text-uppercase mb-2 mt-5">
            {props.text}
        </button>
    );
}

export default Button;