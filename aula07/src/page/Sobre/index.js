import React,{ useEffect,useContext} from 'react';
import CardSobre from '../../components/CardSobre';
import Img from '../../assets/eu-mesmo.jpg';
import { GlobalContext } from '../../context/NameContext';

const Sobre = () => {

  const {setFooter} = useContext(GlobalContext);

    useEffect(()=>{
        setFooter(true);
      },[])

  return (
    <>
      <CardSobre img={Img}/>
    </>
  );
}

export default Sobre;