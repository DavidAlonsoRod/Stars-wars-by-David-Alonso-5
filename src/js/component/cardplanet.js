import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/planets.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // Corazón lleno
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; // Corazón vacío

export const Cardplanet = ({ customKey, name, uid, index }) => {
    const { store, actions } = useContext(Context);

    const handleHeartClick = () => {
        actions.changeMessage(name);
    };

    // Define la URL de la imagen de Tatooine
    const tatooineImageUrl = "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357";

    // Lógica para usar la URL de Tatooine si el nombre es "Tatooine"
    const imageUrl = name === "Tatooine" ? tatooineImageUrl : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`;

    return (
        <div className="card rounded-top highlight-padding" style={{ width: "14rem" }}>
            <img src={imageUrl} className="card-img-top rounded-top p-3" alt={`${name} Image`} />
            <div className="card-img-top rounded-top p-3">
                <Link to={"/planet/" + index} className="btn btn-dark"> {name}</Link>
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
    );
};