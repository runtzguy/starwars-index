import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'react-bootstrap'

import FilmContainer from './FilmContainer'
import {FilmsProvider} from '../contexts/FilmsProvider';
import {CharactersProvider} from '../contexts/CharactersProvider';
import CharacterContainer from './CharacterContainer'

function App() {
  const [isSeeCharacterSelected, setIsSeeCharacterSelected] = useState(false)
  
  function handleSeeCharacterButton(){
    setIsSeeCharacterSelected(true);
  }

  return (
    <Container>
      <Router>
        <FilmsProvider>
        <CharactersProvider>
        <Switch>
          <Route exact path='/' render={() => <FilmContainer handleSeeCharacterButton={handleSeeCharacterButton}/>}></Route>
          <Route exact path='/film' render={() => <FilmContainer handleSeeCharacterButton={handleSeeCharacterButton}/>}></Route>
          <Route path='/film/characters' render={() => <CharacterContainer/>}></Route>
        </Switch>
        </CharactersProvider>
        </FilmsProvider>
      </Router>
    </Container>
  );
}

export default App;
