import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import FilmContainer from './FilmContainer'
import {FilmsProvider} from '../contexts/FilmsProvider';
import CharacterContainer from './CharacterContainer'

function App() {
  function redirectTo(){
  }
  return (
    <div className="App">
      <Router>
        <FilmsProvider>
        <Switch>
          <Route exact path='/' render={() => <FilmContainer/>}></Route>
          <Route exact path='/film' render={() => <FilmContainer/>}></Route>
          <Route path='/film/characters' render={() => <CharacterContainer/>}></Route>
        </Switch>
        </FilmsProvider>
      </Router>
    </div>
  );
}

export default App;
