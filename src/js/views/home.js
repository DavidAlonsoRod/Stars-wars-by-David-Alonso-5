import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Cardcharacter } from "../component/cardcharacter";

import { Cardplanet } from "../component/cardplanet";
import { Character } from "./character";
import { Cardvehicles } from "../component/cardvehicles";

export const Home = () => {

	const { store, actions } = useContext(Context);


	return (
		<>
			<hr></hr>
			<div className="text-center">
				<div className="container ">
					<h1 className="m-3 text-start">Personajes</h1>
					<div className="d-flex align-content-around gap-4" style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap", paddingBottom: "50px" }}>
						{store.charactersflux.map((character, index) => <div display="inline-block"><Cardcharacter key={index} index={index} uid={character.uid} name={character.name} /></div>)}
					</div>
				</div>
			</div >

			<div className="text-center ">
				<div className="container ">
					<h1 className=" m-3 text-start">Planetas</h1>
					<div className="d-flex align-content-around gap-4" style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap", paddingBottom: "50px" }}>
						{store.planetsflux?.map((planet, index) => <div display="inline-block"><Cardplanet key={index} index={index} uid={planet.uid} name={planet.name} /></div>)}
					</div>
				</div>
			</div >
			<div className="text-center ">
				<div className="container ">
					<h1 className=" m-3 text-start">Vehículos</h1>
					<div className="d-flex align-content-around gap-4" style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap", paddingBottom: "50px" }}>
						{store.vehiclesflux?.map((vehicle, index) => <div display="inline-block"><Cardvehicles key={index} index={index} uid={vehicle.uid} name={vehicle.name} /></div>)}
					</div>
				</div>
			</div >


		</>




	);

}




