import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import './App.scss';

import Layout from './components/layout/layout';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
