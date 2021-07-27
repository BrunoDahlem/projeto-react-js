import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

const NameContext = ({children}) => {
    const [nomeFilme, setNomeFilme] = useState('');
    const[footer,setFooter] = useState(true);
    return (
    <GlobalContext.Provider value={{nomeFilme,setNomeFilme,footer,setFooter}}>
        {children}
    </GlobalContext.Provider>
    )
}

export default NameContext;