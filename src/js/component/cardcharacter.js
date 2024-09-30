import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/character.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // Corazón lleno
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; // Corazón vacío

export const Cardcharacter = ({ uid, name, index }) => {
    const { store, actions } = useContext(Context);

    const handleHeartClick = () => {
        actions.changeMessage(name);
    };

    return (
        <>
            <div className="card rounded-top highlight-padding" style={{ width: "14rem" }}>
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                    className="card-img-top rounded-top p-3"
                    alt="Character Image"
                />
                <div className="card-img-top rounded-top p-3">
                    <Link to={"/character/" + index} className="btn btn-dark">
                        {name}
                    </Link>

                    <span
                        onClick={handleHeartClick}
                        style={{
                            cursor: 'pointer',
                            marginLeft: '10px',
                        }}
                    >
                        {store.misCharacters.includes(name)
                            ? <FontAwesomeIcon icon={solidHeart} style={{ color: 'red' }} className="icon-large" />
                            : <FontAwesomeIcon icon={regularHeart} style={{ color: 'white' }} className="icon-large" />
                        }
                    </span>
                </div>
            </div>
        </>
    );
};