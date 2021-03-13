import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faFlag, faFootballBall, faGlobe, faLocationArrow, faTransgender,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';

const TeamDetails = () => {
    const {idTeam} = useParams();
    const [teams, setTeams] = useState({});
    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams[0]))
        // .then(data => console.log(data.teams[0]))
    }, [idTeam])

    return (
        <div className="container">     
              
            <div className="teamDetail-container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="teamDtl">
                             <div className="teamHeading">
                                <h2>{teams.strTeam} </h2>
                                <img src={teams.strTeamFanart1} alt=""/>
                             </div>
                                <strong><p> Sports Type: {teams.strLeague}</p></strong>
                                <p><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>  Country: {teams.strCountry}</p>
                                <p><FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> Location: {teams.strStadiumLocation}</p>
                                <p><FontAwesomeIcon icon={faFootballBall}></FontAwesomeIcon> League: {teams.strLeague2}, {teams.strLeague3}, {teams.strLeague4}</p>
                                <p><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> website: {teams.strWebsite}</p>
                                <p><FontAwesomeIcon icon={faTransgender}></FontAwesomeIcon> Gender: {teams.strGender}</p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="teamBanner">
                            <img src={teams.strTeamFanart3} alt=""/>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
            <br/>
            <div className="description-1">
                    <p>{teams.strDescriptionEN}</p>
            </div>
            <br/>
            <div className="description-2">
                <p>{teams.strStadiumDescription}</p>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com/premierleague"><span className="icon"><FontAwesomeIcon icon={faFacebook} /></span></a>
                <a href="https://twitter.com/premierleague"><span className="icon"><FontAwesomeIcon icon={faTwitter} /></span></a>
                <a href="https://www.instagram.com/premierleague"><span className="icon"><FontAwesomeIcon icon={faInstagram} /></span></a>
                <a href="https://www.youtube.com/premierleague"><span className="icon"><FontAwesomeIcon icon={faYoutube} /></span></a>
            </div>
            <br/>
            <footer><p>Copyright <span><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon></span> 2021 by Sports Manager</p></footer>

        </div>
    );
};

export default TeamDetails;