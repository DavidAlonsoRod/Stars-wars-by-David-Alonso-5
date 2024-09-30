import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Character } from "./views/character";
import { Planet } from "./views/planet";
import { Vehicles } from "./views/vehicles";



const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/vehicle/:vehicles_id" element={<Vehicles />} />
						<Route path="/planet/:planet_id" element={<Planet />} />
						<Route path="/character/:character_id" element={<Character />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Puff ! vaya desastre , esta página no la encuentro!!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
