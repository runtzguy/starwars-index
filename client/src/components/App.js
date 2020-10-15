import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'react-bootstrap'

import FilmContainer from './FilmContainer'
import {FilmsProvider} from '../contexts/FilmsProvider';
import {CharactersProvider} from '../contexts/CharactersProvider';
import CharacterContainer from './CharacterContainer'
import LoadingSpinner from './LoadingSpinner'

function App() {
  const [isSeeCharacterSelected, setIsSeeCharacterSelected] = useState(false)
  const [isLoadingSpinnerActive, setIsLoadingSpinnerActive] = useState(false)

  function handleSeeCharacterButton(){
    setIsSeeCharacterSelected(true);
  }

  function triggerLoadingSpinner(bool){
    setIsLoadingSpinnerActive(bool)
  }

  return (
    <Container>
      <Router>
        <FilmsProvider>
        <CharactersProvider>
        {isLoadingSpinnerActive 
          ? <LoadingSpinner/> 
          : <Switch>
              <Route exact path='/' 
                render={() => 
                <FilmContainer 
                  handleSeeCharacterButton={handleSeeCharacterButton}
                  triggerLoadingSpinner={triggerLoadingSpinner}
                />}
              >
              </Route>
              <Route exact path='/film' 
                render={() => 
                <FilmContainer 
                  handleSeeCharacterButton={handleSeeCharacterButton}
                  triggerLoadingSpinner={triggerLoadingSpinner}
                />}
              >
              </Route>
              <Route path='/film/characters' render={() => 
                <CharacterContainer/>
              }>
              </Route>
            </Switch>
        }
        </CharactersProvider>
        </FilmsProvider>
      </Router>
    </Container>
  );
}

export default App;
