import React, { useEffect, useState, useContext } from "react";
import { rigoImage } from "../../img/rigo-baby.jpg"
import "../../styles/home.css";
import { Cardnave } from "../component/cardnave";
import { Context } from "../store/appContext"
import { Characters } from "../component/characters";

export const Home = () => {

	const { store, actions } = useContext(Context);



	return (
		<>


			<div className="text-center ">
				<div className="container ">
					<h1 className="text-danger text-start">Characters</h1>
					<div className="d-flex align-content-around flex-wrap gap-4">
						{store.charactersflux.map((character) => <Characters key={character.uid} uid={character.uid} name={character.name} />)}
					</div>
				</div>
			</div >
			<div className="text-center ">
				<div className="container ">
					<h1 className="text-danger text-start">Naves</h1>
					<div className="d-flex align-content-around flex-wrap gap-4">
						{store.navesflux.map((nave) => <Cardnave key={nave.uid} uid={nave.uid} name={nave.name} />)}
					</div>
				</div>
			</div >



		</>
	);

}