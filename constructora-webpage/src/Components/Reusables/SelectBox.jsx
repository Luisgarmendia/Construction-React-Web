import React from 'react';

const SelectBox = (props) => {
    return(
        <div className="col-xl-4 col-lg-6 col-sm-12">
                        <select name={props.name} 
                        ref={props.constant({
                            required: {
                                value: props.required,
                                message: "*-this field is required"
                            }
                        })}>
                        <option value=""></option>
                        {props.list.map((item, index) =>
                        
                        <option key={index} value={item._id}>{item.name}</option>)}
                        </select>
                            
                        { props.required ? (
                            <span className="text-danger text-small d-block mb-2">
                                {props.messageError}
                            </span>
                        ) : <h6></h6>}
        </div>
    );
}

export default SelectBox;