import React from "react";
import { rigoImage } from "../../img/rigo-baby.jpg";
import "../../styles/home.css"

export const Cardnave = (props) => {
	return (

		<div className="card" style={{ width: "18rem" }}>
			<img src={rigoImage} className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">info.</p>
				<button href="#" className="btn btn-primary">Ver nave</button>
			</div>
		</div>
	);
};
