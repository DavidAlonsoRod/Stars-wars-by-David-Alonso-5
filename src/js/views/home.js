import React, { useContext, useEffect } from "react";
import { rigoImage } from "../../img/rigo-baby.jpg"
import "../../styles/home.css";
import { Cardnave } from "../component/cardnave";
import { Context } from "../store/appContext";
import { Cardcharacter } from "../component/cardcharacter";

import { Cardplanets } from "../component/cardplanets";
import { Character } from "./character";

export const Home = () => {

	const { store, actions } = useContext(Context);


	useEffect(() => {
		actions.functionCharacters();
		actions.loadStarships();

	}, []);



	return (
		<>

			<div className="text-center ">
				<div className="container ">
					<h1 className="text-danger text-start">Personajes</h1>
					<div className="d-flex align-content-around gap-4" style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap", paddingBottom: "50px" }}>
						{store.charactersflux.map((character, index) => <div display="inline-block"><Cardcharacter key={index} uid={character.uid} name={character.name} /></div>)}
					</div>
				</div>
			</div >
			<div className="text-center ">
				<div className="container ">
					<h1 className="text-danger text-start">Naves</h1>
					<div className="d-flex align-content-around gap-4" style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap", paddingBottom: "50px" }}>
						{store.navesflux.map((nave, index) => <div display="inline-block"><Cardnave key={nave.uid} uid={nave.uid} name={nave.name} /></div>)}
					</div>
				</div>
			</div >


		</>




	);

}

{/*  */ }
{/*  */ }
{/* <div className="text-center ">
				<div className="container ">
					<h1 className="text-danger text-start">Planetas</h1>
					<div className="d-flex align-content-around gap-4" style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap", paddingBottom: "50px" }}>
						{store.planetsflux.map((planet) => <div display="inline-block"><Cardplanet key={planet.uid} uid={planet.uid} name={planet.name} /></div>)}
					</div>
				</div>
			</div > */}




