import React, {useContext} from 'react'
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';

const CharactersContext = React.createContext();

export function useCharacters(){
    return useContext(CharactersContext);
}

export function CharactersProvider({children}) {
    const [charactersInfo, setCharactersInfo] = useLocalStorage('characters', []);

    function getCharactersByUrls(urls){
        return new Promise((resolve, reject) => {
            axios.get('/characters', {
                params : {
                    Urls : [...urls]
                },
                timeout: 5000
            }).then(response => {
                setCharactersInfo(response.data.data);
                resolve(response.data.data.message);
            }).catch(err => reject(err));
        })
       
    }

    return (
        <CharactersContext.Provider value={{charactersInfo, getCharactersByUrls}}>
            {children}
        </CharactersContext.Provider>
    )
}
