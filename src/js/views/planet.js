import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = props => {
    const { store, actions } = useContext(Context);
    const [Planet, setPlanet] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${parseInt(params.planet_id) + 1}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.result && data.result.properties) {
                    setPlanet(data.result.properties);
                } else {
                    console.error("Data inválida", data);
                }
            })
            .catch((error) => console.error("Error fetching planet:", error));
    }, [params.planet_id]);

    return (
        <div className="jumbotron m-3">
            <h1 className="display-4">{Planet.name}</h1>
            <hr className="my-4" />
            <div className="d-flex justify-content-left">
                <div className="d-flex m-5">
                    {Planet.name && (
                        <img
                            src={Planet.name === "Tatooine" ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" : `https://starwars-visualguide.com/assets/img/planets/${parseInt(params.planet_id) + 1}.jpg`}
                            alt={Planet.name} // Usa el nombre del planeta en lugar de Data_Planet
                            style={{ width: '100%', borderRadius: '10px' }}
                        />
                    )}
                </div>
                <div className="d-flex align-items-start flex-column m-5">
                    <p><span>Clima:</span> <span style={{ color: 'white' }}><strong>{Planet.climate}</strong></span></p>
                    <p><span>Periodo de rotación:</span> <span style={{ color: 'white' }}><strong>{Planet.rotation_period}</strong></span></p>
                    <p><span>Período orbital:</span> <span style={{ color: 'white' }}><strong>{Planet.orbital_period}</strong></span></p>
                    <p><span>Poblaión:</span> <span style={{ color: 'white' }}><strong>{Planet.population}</strong></span></p>
                    <p><span>Superficie de agua:</span> <span style={{ color: 'white' }}><strong>{Planet.surface_water}</strong></span></p>
                    <p><span>Terreno:</span> <span style={{ color: 'white' }}><strong>{Planet.terrain}</strong></span></p>
                </div>
            </div>
            <Link className="d-flex justify-content-center flex-end" to="/">
                <span className="btn btn-dark btn-lg d-flex justify-content-center flex-end" role="button">
                    Inicio
                </span>
            </Link>
        </div>
    );
};

Planet.propTypes = {
    match: PropTypes.object
};