import React, { useContext } from "react";
import "../../styles/character.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';


export const Cardvehicles = ({ name, index, uid, customKey }) => {
    const { store, actions } = useContext(Context)
    const handleHeartClick = () => {
        actions.changeMessage(name);
    };

    return (

        <div className="card rounded-top highlight-padding" style={{ width: "14rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} className="card-img-top rounded-top p-3" alt="Nave Image" />
            <div className="card-body">

                <Link to={"/vehicle/" + uid} className="btn btn-dark">{name}</Link>
                <span
                    onClick={handleHeartClick}
                    style={{
                        cursor: 'pointer',
                        marginLeft: '10px',
                    }}
                >
                    {store.misCharacters.includes(name)
                        ? <FontAwesomeIcon icon={solidHeart} style={{ color: 'red' }} className="icon-large" /> // Dislike
                        : <FontAwesomeIcon icon={regularHeart} style={{ color: 'white' }} className="icon-large" /> // Like
                    }
                </span>


            </div>
        </div>
    );
};
