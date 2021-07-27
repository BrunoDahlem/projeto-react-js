import React, { useContext, useEffect, useState } from 'react';
import GetMovies from '../../service/Movie/GetMovies';
import {ContainerPesquisa,BarraPesquisa,BtnPesquisa,ContainerFilmes,BtnPages,ContainerPages} from './styled'
import Lupa from '../../assets/lupa.png';
import Card from '../../components/Card';
import { GlobalContext } from '../../context/NameContext';

const Filmes = ({setFooter}) => {

    const[name,setName] = useState('');
    const[data,setData] = useState([]);
    const[paginas,setPaginas] = useState([]);
    const[pageActive,setPageActive] = useState(1)
    const {setNomeFilme} = useContext(GlobalContext);
    


    const GetDataMovies = async (name) =>{
        const response = await GetMovies(name);
        const total = Math.floor(response.totalResults/10)+1;
        let page = [1];
        for (let i = 2; i <= total; i++) {
            page.push(i);
        }
        setPaginas(page);
        setData(response.Search);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        GetDataMovies(name);
        setNomeFilme(name);
    }
    useEffect(()=>{
        GetDataMovies('hulk');
        setName('hulk');
        setPageActive(1);
        setFooter(false);
        setNomeFilme('hulk');
    },[]);
    
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[data]);

    console.log(paginas);
    return (
        <>
        <ContainerPesquisa onSubmit={handleSubmit}>
            <BarraPesquisa 
            id="name"
            name="name"
            setValue={setName} 
            value={name}
            type="text"
            placeholder="Digite seu Filme"
            required
            />
            <BtnPesquisa><img src={Lupa} alt="Lupa de pesquisa"/></BtnPesquisa>
        </ContainerPesquisa>
        <ContainerFilmes>
            {data.map((item,index) =>{
                return(
                <Card key={index} data={item}/>
            )})}
        </ContainerFilmes>
        <ContainerPages>
            <BtnPages onClick={()=>{
                let x = 1 ;
                {pageActive-1 <=0 ? x=1 : x=pageActive-1 }
                GetDataMovies(`${name}&page=${x}`)
                setPageActive(x)}}> 
                
                {'<<'} 
            </BtnPages>
            {
            paginas.map((index) =>{
                return(
                    <BtnPages id={index} onClick={()=>{
                        setPageActive(index)
                        GetDataMovies(`${name}&page=${index}`)
                    }} key={index}>
                        {index}
                    </BtnPages>
                
            )})
            }
            <BtnPages onClick={()=>{
                let x = 1 ;
                {pageActive+1 >= paginas[paginas.length - 1] ? x = paginas[paginas.length - 1] : x=pageActive+1 }
                GetDataMovies(`${name}&page=${x}`)
                setPageActive(x)}}> 
                {'>>'} 
            </BtnPages>
        </ContainerPages>
        </>
    );
}

export default Filmes;