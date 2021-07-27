import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CardDetail from '../../components/CardDetail';
import GetDetailMovie from '../../service/Movie/GetDetailMovie';
import { GlobalContext } from '../../context/NameContext';

const FilmesDetalhe = () => {
  const [data,setData]= useState([]);
  const params = useParams();
  const {setFooter} = useContext(GlobalContext);

  useEffect(()=>{
    const getDetail = async () => {
      const response = await GetDetailMovie(params.id);
      setData(response);
    }
    getDetail();
    setFooter(true);
  },[])
  return(
  <>
    <CardDetail data={data}/>
  </>
  );
}

export default FilmesDetalhe;