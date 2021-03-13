import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import "./TeamView.css";


const TeamView = (props) => {
    console.log(props)
    const {idTeam, strTeam, strTeamLogo, strLeague} = props.team;

    return (
        <div className="teamView">
                <img src={strTeamLogo} alt=""/>
                <h3>{strTeam}</h3>
                <h5>{strLeague}</h5>
                
                <div className="btnLink">
                    <Link to={`/Team/${idTeam}`}>
                     <button className="explore-btn">Explore <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                    </Link>
                </div>

        </div>
    );
};

export default TeamView;