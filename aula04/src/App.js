// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {

//   const [contar,setContar] = useState(0);
//   const [data,setData] = useState(false);

//   // NÂO USAR PQ PODE GERAR MUITAS REQUISIÇÕES
//   // useEffect(()=> {
//   //   console.log('Executa sempre!!');
//   // });

//   useEffect(()=> {
//     console.log('Executa ao iniciar !!');
//   },[]);

//   useEffect(()=> {
//     console.log('Escutando um valor !!', data);
//   },[data]);

//   return (
//     <div className="App">
//       <h1>UseEffect</h1>
//       <button onClick={()=> setContar(contar +1)}>{'Contar = ' +contar}</button>
//       <button onClick={()=> setData(!data)}>{data ? 'Data = true':'Data = false'}</button>
//     </div>
//   );
// }

// export default App;


// INPUTS

// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const data = {
//       "nome":name,
//       "email":email,
//       "senha":pass
//     }

//     console.log(data);
//     window.localStorage.setItem("User", JSON.stringify(data));
//   }

//   return (
//     <div className="App">
//       <h1>Input</h1>
//       <form onSubmit={handleSubmit} 
//       style={{display:"flex",flexDirection:"column"}}
//       >
//         <label htmlFor="name">Nome</label>
//         <input 
//         id="name" 
//         type="text"
//         name="name"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//         />
//         <label htmlFor="email">E-mail</label>
//         <input 
//         id="email" 
//         type="text"
//         name="email"
//         value={email}
//         onChange={(event) => setEmail(event.target.value)}
//         />
//         <label htmlFor="pass">Senha</label>
//         <input 
//         id="pass" 
//         type="password"
//         name="pass"
//         value={pass}
//         onChange={(event) => setPass(event.target.value)}
//         />

//         <button>Cadastrar</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//INPUTS MAIS COPLEXOS

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [form, setForm] = useState({
    "name":'',
    "email":'',
    "pass":''
  })

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(form);
    window.localStorage.setItem("User", JSON.stringify(form));
  }

  const handleChange = ({target}) => {
    const {id, value} = target;
    console.log(id,value);
    setForm({...form,[id]:value})
  }

  return (
    <div className="App">
      <h1>Input</h1>
      <form onSubmit={handleSubmit} 
      style={{display:"flex",flexDirection:"column"}}
      >
        <label htmlFor="name">Nome</label>
        <input 
        id="name" 
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        />
        <label htmlFor="email">E-mail</label>
        <input 
        id="email" 
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
        />
        <label htmlFor="pass">Senha</label>
        <input 
        id="pass" 
        type="password"
        name="pass"
        value={form.pass}
        onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>
    </div>
  );
}

export default App;