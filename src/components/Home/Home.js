import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import TeamView from '../TeamView/TeamView';
import "./Home.css";

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=> {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, [])
    return (
        <div className="home container">
            <div className="title-heading">
                <h2 className="club">CLUB <span>LIST</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ducimus</p>
            </div>

            <div className="teamView-container">
                 {
                   teams.map(team => <TeamView  team={team}></TeamView>)
                 }
            </div>
            <footer><p>Copyright <span><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon></span> 2021 by Sports Manager</p></footer>
        </div>
    );
};

export default Home;