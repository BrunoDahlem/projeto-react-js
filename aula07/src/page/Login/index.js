import React,{ useEffect} from 'react';

const Login = ({setFooter}) => {
  useEffect(()=>{
    setFooter(true);
  },[])
  return <h1>Login</h1>;
}

export default Login;