import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import './Home.js';
import './Records.js';
import './News.js';
import './Artists.js';



class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <h2>Medium Rare Records</h2>
               <nav className="main-nav navbar navbar-expand-lg navbar-light bg-light">
                  <ul>
                     <li><Link to={'/Records'} className="nav-link">Records</Link></li>
                     <li><Link to={'/Artists'} className="nav-link">Artists</Link></li>
                     <li><Link to={'/News'} className="nav-link">News</Link></li>
                  </ul>
               </nav>
            </div>
         </Router>
      )
   }
};

export default App;
