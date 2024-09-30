const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			
			charactersflux: [{}],
			message: 'Mensaje inicial',
			planetsflux: [],
			misCharacters: [],
			vehiclesflux:[]

		},
		actions: {

			changeMessage: (name) => {
				const store = getStore();
				if (store.misCharacters.includes(name)) {
					const new_list = store.misCharacters.filter((character) => character != name)
					console.log(new_list)
					setStore({ misCharacters: new_list });
				} else {
					console.log('no está')
					setStore({ misCharacters: [...store.misCharacters, name] });
				}
			},


			loadCharacters: () => {

				const store = getStore();

				setStore({ characters: [] })


				fetch('https://www.swapi.tech/api/people')
					.then((response) => response.json())
					.then((data) => setStore({ charactersflux: data.results }))

			},

			loadPlanets: () => {

				const store = getStore();

				setStore({ planetsflux: [] })


				fetch('https://www.swapi.tech/api/planets')
					.then((response) => response.json())
					.then((data) => setStore({ planetsflux: data.results }))

			},

			loadVehicles: () => {

				const store = getStore();

				setStore({ vehiclesflux: [] })


				fetch('https://www.swapi.tech/api/vehicles')
					.then((response) => response.json())
					.then((data) => setStore({ vehiclesflux: data.results }))

			},
			
			removeFavorite: (name) => {
				const store = getStore();
				const new_list = store.misCharacters.filter((character) => character !== name);
				setStore({ misCharacters: new_list });
			}

		}
	};
};

export default getState;
