import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import '../../styles/navbar.css';
import logo from '../../img/logo_star.png'; // Asegúrate de que la ruta sea correcta



export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar mb-3">
			<Link to="/">
				{/* <span className="navbar-brand m-3 h1">Star Wars Blog</span> */}
			</Link>
			<img src={logo} alt="Logo" style={{ height: '50px' }} />
			<div className="ml-auto">
				<div className="dropdown m-3" style={{ position: 'relative' }}>
					<button
						className="btn dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Ver favoritos
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.misCharacters.length > 0 ? (
							store.misCharacters.map((name, index) => (
								<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
									<span>{name}</span>
									<span onClick={() => actions.removeFavorite(name)} >

										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
											<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
											<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
										</svg>
									</span>
								</li>
							))
						) : (
							<li className="dropdown-item">No hay favoritos</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};