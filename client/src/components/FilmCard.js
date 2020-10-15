import React from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import { useHistory, Redirect, Link} from 'react-router-dom'

export default function FilmCard({film}) {
    const history = useHistory();

    function handleSeeCharacters(){
        history.push('/film/characters')
        
        /*
        //using falsy and truthy to check if film.characters is empty
        if(film.characters){
            axios.get('/characters', {
                params : {
                    Urls : [...film.characters]
                }
            }).then(response => console.log(response))
            .catch(err => console.error(err));
        } else {
            alert('No film characters to query');
        }
        */
        
    }

    return (
        <Card style={{width : '300px'}}>
            <Card.Header>Movie</Card.Header>
            <Card.Body>
                <Card.Title>{film.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Director: {film.director}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Producers: {film.producer}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Release Date: {film.release_date}</Card.Subtitle>
                <a href='/film/characters' >See Characters</a>
            </Card.Body>
        </Card> 
    )
}
