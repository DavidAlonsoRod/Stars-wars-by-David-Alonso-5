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
    const [character, setCharacter] = useState('');
    // const params = useParams();
    const url = "www.swapi.tech/api/people/1";
    const idNumero = obtenerIdDeUrl(url);
    console.log("El ID es:", idNumero);

    // useEffect(() => {

    //     fetch('https://www.swapi.tech/api/people/${idNumero}')
    //         .then((response) => response.json())
    //         // .then((data) => console.log(data.results))
    //         .then((data) => setCharacter(data.result))

    // }, [])




    return (
        <div className="jumbotron">
            <h1 className="display-4">Este es el personaje: </h1>

            <hr className="my-4" />
            <p>Name: {character.name}</p>


            <p>Description:</p>
            <p> Manufacturer:</p>
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
