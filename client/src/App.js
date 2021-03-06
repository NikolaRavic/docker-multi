import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to='/'>Homes</Link>
            <Link to='/otherpage'>Other Pages</Link>
          </header>
          <div>
            <Route exact path='/' component={Fib}/>
            <Route path='/otherpage' component={OtherPage}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
