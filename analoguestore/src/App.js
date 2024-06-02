// src/App.js
import React from 'react';
import './styles/style.css';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Mi Tienda</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
