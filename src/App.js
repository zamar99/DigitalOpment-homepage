import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/pages/About/About';
import { Navigation } from './components/layout/Navbar';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/layout/Footer';
import img1 from './assets/img/Whitefooter.png';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
        <div>
          <Footer />
          <div style={{ backgroundColor: 'black' }}>
            <div className='row'>
              <div className='col-12'>
                <div className='footerlogo text-center m-auto d-block w-100'>
                  <img
                    src={img1}
                    alt='img'
                    style={{ width: '350px', verticalAlign: 'middle', boxSizing: 'border-box' }}
                  />
                </div>
                <div className='copyrights text-center m-auto d-block w-100'>
                  <p>&copy; All Rights Reserved By Digitalopment.Com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
