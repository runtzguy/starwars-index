import React from 'react'
import { Card } from 'react-bootstrap';
import {cardStyle} from '../css/cardStyle'

export default function CharacterCard({character}) {
    return (
        <Card style={cardStyle}>
            <Card.Header>Character</Card.Header>
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Height: {character.height}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Eye Color: {character.eye_color}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Gender: {character.gender}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}
