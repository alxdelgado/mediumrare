import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import RecordsContainer from './RecordsContainer';
// import Records from './Records/index.js';
import News from './News.js';
import Artists from './Artists.js';
import Login from './Login/Login.js';
import Register from './Register.js';

class App extends Component {

   constructor() {
      super();
      this.state = {
         records: []
      }
   }

   componentDidMount() {
      console.log('COMPONENT HAS MOUNTED APP.JS');
      this.getRecords()
      .then(parsedRecords => {
         this.setState({
            records: parsedRecords.records
         })
      })
   }

   getRecords = async () => {
      try {
         const res = await fetch('http://localhost:3001/mediumrare_database', {
            credentials: 'include',
            method: 'GET'
         })

         //check server response
         // if (!== res.status(200))

         const recordsFind = await res.json()
         return recordsFind

      } catch (err) {

      }
   };

   render() {
      return (
         <Router>
            <div>
               <h2>Medium Rare Records</h2>
               <nav className="main-nav">
                  <ul>
                     <li><Link to={'/'} className="nav-link">Home</Link></li>
                     <li><Link to={'/Records'} className="nav-link">Records</Link></li>
                     <li><Link to={'/Artists'} className="nav-link">Artists</Link></li>
                     <li><Link to={'/News'} className="nav-link">News</Link></li>
                     <li><Link to={'/Login'} className="nav-link">Login</Link></li>
                     <li><Link to={'/Register'} className="nav-link">Register</Link></li>
                  </ul>
               </nav>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/Records" render={() =>
                     <RecordsContainer
                        records={this.state.records}
                     />}
                  />
                  <Route path="/Artists" component={Artists} />
                  <Route path="/News" component={News} />
                  <Route path="/Login" component={Login} />
                  <Route path="/Register" component={Register} />
               </Switch>
            </div>
         </Router>
      )
   }
};

export default App;
