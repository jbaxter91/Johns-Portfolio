import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/index';
import Portfolio from './components/Portfolio';
import {Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <CssBaseline/>
        <Route path="/" exact component={Home}/>
        <Route path="/portfolio" exact component={Portfolio}/>
    </div>
  );
}

export default App;