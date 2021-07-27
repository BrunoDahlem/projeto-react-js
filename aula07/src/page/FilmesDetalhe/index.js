import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardDetail from '../../components/CardDetail';
import GetDetailMovie from '../../service/Movie/GetDetailMovie';

// import { Container } from './styles';

const FilmesDetalhe = ({setFooter}) => {
  const [data,setData]= useState([]);
  const params = useParams();

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