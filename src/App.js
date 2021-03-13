import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import logo from './image/pr logo.png';

function App() {
  return (
    <div className="App">
      <Router>
   <div>
      <div className="header">
        <nav className="nav container">
        <div className="logo"> 
          <img src={logo} alt=""/>
          
         </div>
          <ul>
            <li>
              <Link to="/home"><span>Home</span></Link>
            </li>
            <li>
              <Link to="/dashboard"><span>Dashboard</span></Link>
            </li>
          </ul>
        </nav>
        <h2>Welcome To Premier League</h2>
        <div className="social-icon">
                <a href="https://www.facebook.com/premierleague"><span className="icon"><FontAwesomeIcon icon={faFacebook} /></span></a>
                <a href="https://twitter.com/premierleague"><span className="icon"><FontAwesomeIcon icon={faTwitter} /></span></a>
                <a href="https://www.instagram.com/premierleague"><span className="icon"><FontAwesomeIcon icon={faInstagram} /></span></a>
                <a href="https://www.youtube.com/premierleague"><span className="icon"><FontAwesomeIcon icon={faYoutube} /></span></a>
            </div>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/Team/:idTeam">
            <TeamDetails/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
