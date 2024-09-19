const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			navesflux: [],
			charactersflux: [{}],
			message: 'inicia',
			planetsflux: []

		},
		actions: {

			loadStarships: async () => {


				fetch('https://www.swapi.tech/api/starships')
					.then((response) => response.json())
					.then((data) => setStore({ navesflux: data.results }))

			},


			functionCharacters: () => {

				const store = getStore();

				setStore({ characters: [] })


				fetch('https://www.swapi.tech/api/people')
					.then((response) => response.json())
					.then((data) => setStore({ charactersflux: data.results }))



			},



			// loadCharacters: async () => {
			// 	try {
			// 		const response = await fetch('https://www.swapi.tech/api/people/');
			// 		const data = await response.json();
			// 		const results = data.results;

			// 		const charactersflux = [];
			// 		for (const result of results) {
			// 			const characterId = result.uid;
			// 			const characterResponse = await fetch(`https://www.swapi.tech/api/people/${characterId}`);
			// 			const characterData = await characterResponse.json();
			// 			charactersflux.push(characterData.result);
			// 		}
			// 		setStore({ charactersflux });

			// 	} catch (error) {
			// 		console.error("Error fetching characters:", error);
			// 	}
			// },

		}
	};
};

export default getState;
