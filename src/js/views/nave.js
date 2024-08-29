import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = props => {
    const { store, actions } = useContext(Context);
    const [starship, setStarship] = useState([]);
    const params = useParams();

    useEffect(() => {

        fetch('https://www.swapi.tech/api/starships/9')
            .then((response) => response.json())
            // .then((data) => console.log(data.results))
            .then((data) => setStarship(data.result.properties))

    }, [])




    return (
        <div className="jumbotron">
            <h1 className="display-4">Esta nave es la puta polla {params.nave_id}</h1>

            <hr className="my-4" />
                <p>Name: {starship.name}</p>

                 <p>Model: {starship.model}</p>
            <p> Manufacturer: {starship.manufacturer}</p>




            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};
Nave.propTypes = {
    match: PropTypes.object
};
