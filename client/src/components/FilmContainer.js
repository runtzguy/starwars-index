import React from 'react'
import { useFilms } from '../contexts/FilmsProvider'
import FilmCard  from './FilmCard'
import {Container} from 'react-bootstrap'
import CharacterContainer from './CharacterContainer'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {containerStyle} from '../css/containerStyle'

export default function FilmContainer({handleSeeCharacterButton, triggerLoadingSpinner}) {
    const {films} = useFilms();

    return (
        <Container style={containerStyle}>   
            {films.length > 0 
                ? films.map( film => 
                <FilmCard 
                    key={film.episode_id} 
                    film={film}
                    handleSeeCharacterButton = {handleSeeCharacterButton}
                    triggerLoadingSpinner = {triggerLoadingSpinner}
                ></FilmCard>) 
                : <div>Error</div>
            }
        </Container>
    )
}
