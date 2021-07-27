import React from 'react';

const Input = ({type = "text",id,name,placeholder,value,setValue,label,...props}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input 
            id={id} 
            name={name} 
            type={type} 
            value={value}
            placeholder={placeholder}
            onChange={
                ({target}) => {
                    setValue(target.value);
                }
            }
            {...props}
            />
        </>
    );
}

export default Input;