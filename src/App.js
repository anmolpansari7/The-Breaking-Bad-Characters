import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from "./Components/Home";
import CharacterPage from "./Components/CharacterPage";

function App() {

  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about/:id" component={CharacterPage} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
