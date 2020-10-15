import React from 'react'
import { Card } from 'react-bootstrap';

export default function CharacterCard({character}) {
    return (
        <Card style={{width : '18rem'}}>
            <Card.Body>
                <Card.Title>character.tile</Card.Title>
            </Card.Body>
        </Card>
    )
}
