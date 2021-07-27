import React from 'react';

// import { Container } from './styles';

function Button({ children, ...props }) {
  return (
    <>
      <button {...props}>{children}</button>
    </>);
}

export default Button;