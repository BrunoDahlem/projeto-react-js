import React,{ useEffect} from 'react';
import CardSobre from '../../components/CardSobre';
import Img from '../../assets/eu-mesmo.jpg'

const Sobre = ({setFooter}) => {
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