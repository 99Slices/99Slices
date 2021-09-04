import React from 'react'
import './App.css'
import Home from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Route path='/' exact component={Home} />
      </Router>
    </>
  );
}

export default App;