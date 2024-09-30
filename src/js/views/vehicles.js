import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = props => {
    const { store, actions } = useContext(Context);
    const [Vehicles, setVehicles] = useState({});
    const params = useParams();



    useEffect(() => {


        fetch(`https://www.swapi.tech/api/vehicles/${parseInt(params.vehicles_id)}`)
            .then((response) => response.json())
            .then((data) => {

                if (data.result && data.result.properties) {
                    setVehicles(data.result.properties);
                } else {
                    console.error("Data inválida", data);
                }
            })
            .catch((error) => console.error("Error fetching character:", error));
    }, [params.vehicule_id]);

    useEffect(() => {
        console.log(Vehicles)
    }, [Vehicles])

    return (
        <div className="jumbotron m-3">
            <h1 className="display-4">{Vehicles.name}</h1>
            <hr className="my-4" />
            <div className="d-flex justify-content-left">
                <div className="d-flex m-5">
                    {Vehicles.name && (
                        <img
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${parseInt(params.vehicles_id)}.jpg`}
                            alt={Vehicles.name} // Usa el nombre del planeta en lugar de Data_Planet
                            style={{ width: '100%', borderRadius: '10px' }}
                        />
                    )}
                </div>
                <div className="d-flex align-items-start flex-column m-5">
                    <p><span>Capacidad de carga:</span> <span style={{ color: 'white' }}><strong>{Vehicles.cargo_capacity}</strong></span></p>
                    <p><span>Autonomía:</span> <span style={{ color: 'white' }}><strong>{Vehicles.consumables}</strong></span></p>
                    <p><span>Precio créditos:</span> <span style={{ color: 'white' }}><strong>{Vehicles.cost_in_credits}</strong></span></p>
                    <p><span>Creado:</span> <span style={{ color: 'white' }}><strong>{Vehicles.created}</strong></span></p>
                    <p><span>Capacidad de carga:</span> <span style={{ color: 'white' }}><strong>{Vehicles.cargo_capacity}</strong></span></p>
                    <p><span>Clase de vehículo:</span> <span style={{ color: 'white' }}><strong>{Vehicles.vehicle_class}</strong></span></p>


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
Vehicles.propTypes = {
    match: PropTypes.object
};
