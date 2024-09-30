import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = () => {
    const { store, actions } = useContext(Context);
    const [Data_Character, setData_Character] = useState(null);
    const params = useParams();



    useEffect(() => {


        fetch(`https://www.swapi.tech/api/people/${parseInt(params.character_id) + 1}`)
            .then((response) => response.json())
            .then((data) => {

                if (data.result && data.result.properties) {
                    setData_Character(data.result.properties);
                } else {
                    console.error("Data inválida", data);
                }
            })
            .catch((error) => console.error("Error fetching character:", error));
    }, [params.character_id]);

    return (
        <div className="jumbotron m-3">
            <h1 className="display-4">{Character.name}</h1>

            <hr className="my-4" />


            {Data_Character ? (
                <>
                    <div className="d-flex justify-content-left">
                        <div className="d-flex m-5">
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${parseInt(params.character_id) + 1}.jpg`}
                                alt={Data_Character.name}
                                style={{ width: '100%', borderRadius: '10px' }}
                            />

                        </div>
                        <div className="d-flex aling-item-start flex-column m-5">
                            <p><span>Name:</span> <span style={{ color: 'white' }}><strong>{Data_Character.name}</strong></span></p>
                            <p><span>Height:</span> <span style={{ color: 'white' }}><strong>{Data_Character.height}</strong></span></p>
                            <p><span>Hair color:</span> <span style={{ color: 'white' }}><strong>{Data_Character.hair_color}</strong></span></p>
                            <p><span>Skin color:</span> <span style={{ color: 'white' }}><strong>{Data_Character.skin_color}</strong></span></p>
                            <p><span>Eye color: </span> <span style={{ color: 'white' }}><strong>{Data_Character.eye_color}</strong></span></p>
                            <p><span>Date of birth:</span> <span style={{ color: 'white' }}><strong>{Data_Character.birth_year}</strong></span></p>
                            <p><span>Gender:</span> <span style={{ color: 'white' }}><strong>{Data_Character.gender}</strong></span></p>



                        </div>

                    </div>

                    <Link className="d-flex justify-content-center flex-end" to="/">
                        <span className="btn btn-dark d-flex justify-content-center" href="#" role="button">
                            Inicio
                        </span>
                    </Link>



                </>
            ) : (
                <p>Cargando datos del personaje...</p>
            )}

            <Link to="/">

            </Link>
        </div>
    );
};
