//SEM HOOKS

// import './App.css';

// function App() {

//   let ativado = true;

//   const handleClick = () => {
//     ativado = !ativado;
//     console.log(ativado);
//   }

//   return (
//     <div className="App">
//       <button onClick={handleClick} className="ativado">
//         {ativado ? "ativado" : "desativado"}
//       </button>
//     </div>
//   );
// }

// export default App;

//COM HOOKS

// import './App.css';
// import React from 'react';

// function App() {

//   const [value, setValue] = React.useState(true);


//   const handleClick = () => {
//     setValue(!value);
//   }

//   return (
//     <div className="App">
//       <button onClick={handleClick} className="ativado">
//         {value ? "ativado" : "desativado"}
//       </button>
//     </div>
//   );
// }

import './App.css';
import { useState } from 'react';

function App() {

  const [listaFilmes, setListaFilmes] = useState([]);
  const [detalheFilmes, setDetalheFilmes] = useState({});
  const url = 'https://60e7662115387c00173e4aeb.mockapi.io/mostraDados';

  const handleClick = () => {
    fetch(url,{
      method:"GET"
    }).then((response)=> response.json())
    .then((listaFilmes)=>{
      console.log(listaFilmes);
      setListaFilmes(listaFilmes);
    })
  }

  const handleDetails = (id) => {
    fetch(`${url}/${+id}`,{
      method:"GET"
    })
    .then((response)=> response.json())
    .then((detalheFilmes)=>{
      console.log(detalheFilmes);
      setDetalheFilmes(detalheFilmes);
    })
  }

  return (
    <div className="App">
      {
        listaFilmes.map((filme,index) => {
          return (
            <div key={index}>
              <h5>{filme.name} {filme.lastName}</h5>
              <img src={filme.avatar} alt={filme.name} />
              <button onClick={()=> handleDetails(filme.id)}>Buscar Detalhes</button>
            </div>
          )
        })
      }
      <button onClick={()=> handleClick()}>Mostra Filmes</button>
    </div>
  );
}

export default App;