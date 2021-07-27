import React, { useState } from 'react';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

function Home() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name,
            email,
            password
        }

        console.log('Valor',data);
    }


    return (
    <div>
        <h1>Home</h1>
        <form onSubmit={handleSubmit}>
            <Input 
                label="Nome" 
                name="name" 
                value={name} 
                id="name"
                setValue={setName}
                required/>
            <Input 
                label="E-mail" 
                name="email" 
                value={email} 
                id="email"
                type="email"
                setValue={setEmail}
                required/>
            <Input 
                label="Senha" 
                name="password" 
                value={password} 
                id="password"
                type="password"
                setValue={setPassword}
                required/>
            <Button>Enviar</Button>
        </form>
    </div>);
}

export default Home;