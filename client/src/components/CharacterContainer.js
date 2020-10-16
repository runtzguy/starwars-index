import React from 'react'
import CharacterCard from './CharacterCard';
import {useCharacters } from '../contexts/CharactersProvider';
import {Container} from 'react-bootstrap'
import {containerStyle} from '../css/containerStyle'

export default function CharacterContainer() {
    const { charactersInfo } = useCharacters();

    return (
        <Container style={containerStyle}>
        {charactersInfo.length > 0 
            ? charactersInfo.map(character => 
                <CharacterCard 
                    key={character.name}
                    character={character}
                    >
                </CharacterCard>
            )
            : <div>No Characters</div>
        }
        </Container>
    )
}
