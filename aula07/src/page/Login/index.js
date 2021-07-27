import React,{ useEffect, useContext} from 'react';
import { GlobalContext } from '../../context/NameContext';

const Login = () => {

  const {setFooter} = useContext(GlobalContext);

  useEffect(()=>{
      setFooter(true);
    },[])

  return <h1>Login</h1>;
}

export default Login;