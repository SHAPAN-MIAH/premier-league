import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="container dashboard">
            <h2>Explore Dashboard</h2>
            <a href="https://www.google.com/search?q=english+premier+league&oq=english+premier+league&aqs=chrome..69i57j69i60.9770j0j7&sourceid=chrome&ie=UTF-8#sie=lg;/g/11j4y8fvpd;2;/m/02_tc;mt;fp;1;;"> <button>Flow Dashboard</button> </a>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <footer><p>Copyright <span><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon></span> 2021 by Sports Manager</p></footer>
        </div>
    );
};

export default Dashboard;