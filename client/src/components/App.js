import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap'

import FilmContainer from './FilmContainer'
import {FilmsProvider} from '../contexts/FilmsProvider';
import {CharactersProvider} from '../contexts/CharactersProvider';
import CharacterContainer from './CharacterContainer'
import LoadingSpinner from './LoadingSpinner'
import SearchBar from './SearchBar';

function App() {
  const [isSeeCharacterSelected, setIsSeeCharacterSelected] = useState(false)
  const [isLoadingSpinnerActive, setIsLoadingSpinnerActive] = useState(false)
  const [searchValue, setSearchValue] = useState('');

  function handleSeeCharacterButton(){
    setIsSeeCharacterSelected(true);
  }

  function triggerLoadingSpinner(bool){
    setIsLoadingSpinnerActive(bool)
  }

  return (
    <Container>
      <SearchBar setSearchValue={setSearchValue}/>
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
                  searchValue={searchValue}
                />}
              >
              </Route>
              <Route exact path='/film' 
                render={() => 
                <FilmContainer 
                  handleSeeCharacterButton={handleSeeCharacterButton}
                  triggerLoadingSpinner={triggerLoadingSpinner}
                  searchValue={searchValue}
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
