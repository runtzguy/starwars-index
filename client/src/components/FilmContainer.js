import React from 'react'
import { useFilms } from '../contexts/FilmsProvider'
import FilmCard  from './FilmCard'
import CharacterContainer from './CharacterContainer'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


export default function FilmContainer() {
    const {films} = useFilms();

    return (
            films.length > 0 ? films.map( film => 
            <FilmCard key={film.episode_id} film={film}></FilmCard>
            ) : <div>Error</div>
    )
}
