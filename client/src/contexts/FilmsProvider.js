import React, {useEffect, useContext} from 'react'
import axios from 'axios'
import useLocalStorage from '../hooks/useLocalStorage';

const FilmsContext = React.createContext();

export function useFilms(){
    return useContext(FilmsContext);
}

export function FilmsProvider({children}) {
    const [films, setFilms] = useLocalStorage('films', []);

    useEffect(() => {
        if(films.length == 0){
            axios.get('/films')
            .then(res => {
                if(res.data.isSuccess){
                    setFilms(res.data.data.results);
                }
            }).catch(err => {
                console.log(err.response.data);
            })
        }
        
    }, [])

    return (
        <FilmsContext.Provider value={{films}}>
            {children}
        </FilmsContext.Provider>
    )
}
