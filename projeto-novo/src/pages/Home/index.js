import React from 'react';
import {useState } from 'react';
import './style.css'
import Card from '../../components/Card';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

function Home() {

    const [listaFilmes, setListaFilmes] = useState([]);
    const [name, setName] = useState('');
    const [detalheFilmes, setDetalheFilmes] = useState({});
    const url = 'http://www.omdbapi.com/';
    const apiKey = '&apikey=ba1ecb32';

    const handleClick = (event) => {
        event.preventDefault();
        fetch(`${url}?s=${name}${apiKey}`,{
        method:"GET",
        }).then((response)=> response.json())
        .then((listaFilmes)=>{
        console.log(listaFilmes.Search);
        setListaFilmes(listaFilmes.Search);
        })
    }

    return (
        <>  
            <form onSubmit={handleClick} className="container__busca ">
                <Input name="nomeFilme" label="Busque seu Filme" id="nomeFilme" value={name} setValue={setName} required/>
                <Button>Busca</Button>
            </form>
            <div className="listaCards">
                {
                listaFilmes.map(({imdbID,Title,Poster,Type,Year}) =>{
                    return( 
                    <div className="pre__card" key={imdbID}>
                        <Card  Title={Title} Poster={Poster} Type={Type} Year={Year} imdbID={imdbID}/>
                    </div>
                    )})
                }
            </div>
        </>);
}

export default Home;