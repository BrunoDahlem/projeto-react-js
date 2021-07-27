import React from 'react';
import './style.css'

function Input({type = "text",id,name,label,value,setValue,...props}) {
    return (
        <div className="form__item">
            <input 
            id={id} 
            name={name} 
            type={type} 
            value={value}
            placeholder={label}
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