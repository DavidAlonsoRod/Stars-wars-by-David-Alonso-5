import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css"
import { Link } from "react-router-dom";

export const Characters = (props) => {

    return (

        <div className="card" style={{ width: "18rem" }}>
            <img src={rigoImage} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">info.</p>
                <Link to={"/nave/" + props.uid} className="btn btn-primary">Ver{props.uid}</Link>
            </div>
        </div>
    );
};
