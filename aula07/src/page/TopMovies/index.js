import React,{ useContext, useEffect} from 'react';
import { GlobalContext } from '../../context/NameContext';


const TopMovies = () => {

    const {setFooter} = useContext(GlobalContext);

    useEffect(()=>{
        setFooter(true);
      },[])

    return <h1>Top Filmes</h1>;
}

export default TopMovies;