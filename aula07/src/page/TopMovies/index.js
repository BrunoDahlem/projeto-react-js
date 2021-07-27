import React,{ useEffect} from 'react';
import { Container } from './styled';

const TopMovies = ({setFooter}) => {
    useEffect(()=>{
        setFooter(true);
      },[])
    return <h1>Top Filmes</h1>;
}

export default TopMovies;