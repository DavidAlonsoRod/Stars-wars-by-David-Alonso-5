import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function obtenerIdDeUrl(url) {
    // Divide la URL en partes separadas por "/"
    const partesUrl = url.split('/');
    // El último elemento no vacío de la lista será el ID
    const idNumero = partesUrl.filter(Boolean).pop();
    return idNumero;
}

export const Character = props => {
    const { store, actions } = useContext(Context);
    const [Data_Character, setData_Character] = useState({});
    const [character, setCharacter] = useState('');
    const params = useParams();
    const url = "www.swapi.tech/api/people/1";
    const idNumero = obtenerIdDeUrl(url);
    console.log("El ID es:", idNumero);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${params.character_id}`)
            .then((response) => response.json())
            .then((data) => setData_Character(data.result.properties))
            .catch((error) => console.error("Error fetching character:", error));

    }, [params.character_id])





    return (
        <div className="jumbotron">
            <h1 className="display-4">Este es el personajds: </h1>

            <hr className="my-4" />
            <p>Name: {Data_Character.height}</p>



            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Inicio
                </span>
            </Link>

        </div>
    );
};
Character.propTypes = {
    match: PropTypes.object
};
