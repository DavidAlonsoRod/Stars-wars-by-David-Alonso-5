import React, { useEffect, useState, useContext } from "react";
import { rigoImage } from "../../img/rigo-baby.jpg"
import "../../styles/home.css";
import { Cardnave } from "../component/cardnave";
import { Context } from "../store/appContext"

export const Home = () => {

	const { store, actions } = useContext(Context);



	return (

		<div className="text-center mt-5">



			<h1 className="text-danger justify-content-start">Naves</h1>
			<div className="container">
				<div className="d-flex align-content-around flex-wrap mb-3">
					{store.navesflux.map((nave) => <Cardnave key={nave.uid} uid={nave.uid} name={nave.name} />)}
				</div>

			</div>


		</div >




	);

}