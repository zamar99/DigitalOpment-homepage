import React from 'react';
import './App.css';
import { Home } from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/pages/About';
import { Navigation } from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
