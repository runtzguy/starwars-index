import React, {useEffect, useContext} from 'react'
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';

const CharactersContext = React.createContext();

export function useCharacters(){
    return useContext(CharactersContext);
}

export function CharactersProvider({children}) {
    const [charactersInfo, setCharactersInfo] = useLocalStorage('characters', []);

    useEffect(() => {
      axios.get('/people')
      .then(res => {
          if(res.data){
              setCharactersInfo(res.data.data);
          }
      }).catch(err => console.error(err));
      
    }, [])

    return (
        <CharactersContext.Provider value={{charactersInfo}}>
            {children}
        </CharactersContext.Provider>
    )
}
