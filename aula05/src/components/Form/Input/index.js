import React from 'react';
import './style.css'

function Input({type = "text",id,name,label,value,setValue,...props}) {
    return (
        <div className="form__item">
            <label htmlFor={id}>{label}</label>
            <input 
            id={id} 
            name={name} 
            type={type} 
            value={value}
            onChange={
                ({target}) => {
                    setValue(target.value);
                }
            }
            {...props}
            />
        </div>
    );
}

export default Input;