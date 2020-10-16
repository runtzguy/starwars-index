import React, {useEffect, useContext} from 'react'
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';

const CharactersContext = React.createContext();

export function useCharacters(){
    return useContext(CharactersContext);
}

export function CharactersProvider({children}) {
    const [charactersInfo, setCharactersInfo] = useLocalStorage('characters', []);

    return (
        <CharactersContext.Provider value={{charactersInfo, setCharactersInfo}}>
            {children}
        </CharactersContext.Provider>
    )
}
