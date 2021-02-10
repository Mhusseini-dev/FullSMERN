import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Main from './Main';
import { Router } from '@reach/router';
import Product from './components/Product';
import Update from './components/Update';

function App() {
  const [products, setProducts] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      axios.get("http://localhost:8000/api/products")
          .then(res => {
              setProducts(res.data);
              setLoaded(true);
          })
  })
  
  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id != productId))
  }

  return (
    <div className="App">
      <Router>
        {loaded && <Main path="products/" products={products} removeFromDom={removeFromDom}/>}
        <Product path="product/:id" removeFromDom={removeFromDom} />
        <Update path="products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
