import React from 'react'
import './App.css'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/Services' exact component={Services} />
        <Route path='/Projects' exact component={Projects} />
        <Route path='/AboutUs' exact component={AboutUs} />
        <Route path='/ContactUs' exact component={ContactUs} />
      </Router>
    </>
  );
}

export default App;