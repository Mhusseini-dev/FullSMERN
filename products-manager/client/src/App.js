import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
  return (
    <center>
      <h1>Products</h1>
      <Router>
        <Main path="product/"/>
        <Detail path="product/:id" />
      </Router>
      <hr/>
    </center>
  );
}
export default App;
