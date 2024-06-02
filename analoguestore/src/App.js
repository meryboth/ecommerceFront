// src/App.js
import React from 'react';
import './styles/style.css';
import './App.css';
import ProductList from './components/products/ProductList';
import Header from './components/header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
