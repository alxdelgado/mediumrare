import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Records from './Records.js';
import News from './News.js';
import Artists from './Artists.js';



class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <h2>Medium Rare Records</h2>
               <nav className="main-nav w-100 navbar navbar-expand-lg navbar-dark bg-light">
                  <ul>
                     <li><Link to={'/'} className="nav-link">Home</Link></li>
                     <li><Link to={'/Records'} className="nav-link">Records</Link></li>
                     <li><Link to={'/Artists'} className="nav-link">Artists</Link></li>
                     <li><Link to={'/News'} className="nav-link">News</Link></li>
                  </ul>
               </nav>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/Records" component={Records} />
                  <Route path="/Artists" component={Artists} />
                  <Route path="/News" component={News} />
               </Switch>
            </div>
         </Router>
      )
   }
};

export default App;
