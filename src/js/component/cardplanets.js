import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css"
import { Link } from "react-router-dom";

export const Cardplanet = (props) => {

    return (

        <div className="card" style={{ width: "18rem" }}>
            <img src={rigoImage} className="card-img-top" />
            <div className="card-body">
                
                <Link to={"/planet/" + props.name} className="btn btn-primary">Ver: {props.name}</Link>

            </div>
        </div>
    );
};

