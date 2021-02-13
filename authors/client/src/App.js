import './App.css';
import {Router} from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

import AuthorsTable from "./components/AuthorsTable"
import CreateAuthorForm from "./components/CreateAuthorForm"
import EditAuthorForm from "./components/EditAuthorForm"

function App() {

  const [counter, setCounter] = useState({count: 0})

  return (
      <div className="App">
        <Router>
          <AuthorsTable counter={counter} setCounter={setCounter} path="/"/>
          <CreateAuthorForm setCounter={setCounter} path="/new"/>
          <EditAuthorForm path="/:id"/>
        </Router>
      </div>
  );
}

export default App;
