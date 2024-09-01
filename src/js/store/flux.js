const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			navesflux: [],
			charactersflux: [],
			message: 'inicia',
			planetsflux: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// changeMesssage: (name) => {
			// 	// setStore({ message: 'name' });
			// 	setStore({ setStore: [...setStore.misNaves,] });
			// },
			loadStarships: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

				fetch('https://www.swapi.tech/api/starships')
					.then((response) => response.json())
					// .then((data) => console.log(data.results))
					.then((data) => setStore({ navesflux: data.results }))

				// 	fetch('https://www.swapi.tech/api/people')
				// 		.then((response) => response.json())
				// 		// .then((data) => console.log(data.results))
				// 		.then((data) => setStore({ charactersflux: data.results }))


			},

			loadCharacters: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/people/');
					const data = await response.json();
					const results = data.results;

					const charactersflux = [];
					for (const result of results) {
						const characterId = result.uid;
						const characterResponse = await fetch(`https://www.swapi.tech/api/people/${characterId}`);
						const characterData = await characterResponse.json();
						charactersflux.push(characterData.result);
					}
					setStore({ charactersflux });
					// localStorage.setItem('characters', JSON.stringify(characters)); 
				} catch (error) {
					console.error("Error fetching characters:", error);
				}
			},
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
