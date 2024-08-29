import React, { useEffect, useState } from "react";
import { rigoImage } from "../../img/rigo-baby.jpg"
import "../../styles/home.css";
import { Cardnave } from "../component/cardnave";

export const Home = () => {

	const [naves, setNaves] = useState([])
	useEffect(() => {
		console.log('aqui')
		fetch('https://www.swapi.tech/api/starships')
			.then((response) => response.json())
			// .then((data) => console.log(data.results))
			.then((data) => setNaves(data.results))

	}, [])


	return (

		<div className="text-center mt-5">


			<Cardnave name="falcon" />
			<Cardnave name="edwin" />
			<Cardnave name="mustafa" />

		</div>


	);

}