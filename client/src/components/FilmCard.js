import React from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import { useHistory, Redirect, Link} from 'react-router-dom'
import { useCharacters } from '../contexts/CharactersProvider'
import {cardStyle} from '../css/cardStyle'

export default function FilmCard({film, handleSeeCharacterButton, triggerLoadingSpinner}) {
    const {setCharactersInfo} = useCharacters()
    const history = useHistory();

    function handleSeeCharacters(e){
        e.preventDefault();
        //using falsy and truthy to check if film.characters is empty
        if(film.characters){
            triggerLoadingSpinner(true);
            axios.get('/characters', {
                params : {
                    Urls : [...film.characters]
                }
            }).then(response => {
                setCharactersInfo(response.data.data);
                history.push('/film/characters')
                triggerLoadingSpinner(false);
                handleSeeCharacterButton();
                
            })
            .catch(err => console.error(err));
        } else {
            alert('No film characters to query');
        }
        
    }

    return (
        <Card style={{width : '18rem', margin: '10px 0px'}}>
            <Card.Header>Movie</Card.Header>
            <Card.Body>
                <Card.Title>{film.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Director: {film.director}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Producers: {film.producer}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Release Date: {film.release_date}</Card.Subtitle>
                <a onClick={handleSeeCharacters} href='/film/characters' >See Characters</a>
            </Card.Body>
        </Card> 
    )
}
