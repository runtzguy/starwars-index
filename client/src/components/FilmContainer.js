import React, {useEffect, useState} from 'react'
import { useFilms } from '../contexts/FilmsProvider'
import FilmCard  from './FilmCard'
import {Container} from 'react-bootstrap'
import {containerStyle} from '../css/containerStyle'

export default function FilmContainer({handleSeeCharacterButton, triggerLoadingSpinner, searchValue}) {
    const {films} = useFilms();
    const [filteredFilms, setFilteredFilms] = useState([]);
    
    useEffect( () => {
        if(!searchValue){
            setFilteredFilms([...films])
            return;
        }
        let filteredResult = films.filter( film => (
            film.title.toLowerCase().includes(searchValue) || film.opening_crawl.toLowerCase().includes(searchValue) 
            ? true 
            : false
        ))
        setFilteredFilms([...filteredResult])
    }, [searchValue, films])

    return (
        <Container style={containerStyle}>   
            {filteredFilms.length > 0 
                ? filteredFilms.map( film => (
                    <FilmCard 
                        key={film.episode_id} 
                        film={film}
                        handleSeeCharacterButton = {handleSeeCharacterButton}
                        triggerLoadingSpinner = {triggerLoadingSpinner}>
                    </FilmCard>  
                    )
                ) 
                : films.length == 0 
                    ? <div>Unable to reach server</div> 
                    : <div>No film title or opening crawl matching: <b>{searchValue}</b></div>
            }
        </Container>
    )
}
