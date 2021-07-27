import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

const NameContext = ({children}) => {
    const [nomeFilme, setNomeFilme] = useState('');
    return (
    <GlobalContext.Provider value={{nomeFilme,setNomeFilme}}>
        {children}
    </GlobalContext.Provider>
    )
}

export default NameContext;