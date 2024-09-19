import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/character.css";

export const Cardcharacter = ({ key, uid, name, gender }) => {

    const { store, actions } = useContext(Context);
    // const [isHovered, setIsHovered] = useState(false);
    // const [colorChange, setColorChange] = useState(false);
    // const isFavorite = store.favorites.includes(props.name);
    // const changeColor = () => {
    //     setColorChange(true)
    //     actions.addFavorite(props.name);
    // };


    return (
        <>

            <div className="card mainCArd" style={{ width: "18rem" }}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="card-img-top rounded-top" alt="Character Image" />
                <div className="card-body">
                    <h5 className="card-title" >{name}</h5>
                    {/* <p className="card-text">Género: {gender}</p> */}
                    {/* <p className="card-text">Color del pelo: {props.hair_color}</p>
                    <p className="card-text">Color de ojos: {props.eye_color} </p> */}
                    <Link to={"/character/" + key} className="btn btn-primary">Ver: {name}</Link>
                    {/* <button className={`${isFavorite ? "btn btn-outline-warning" : "btn btn-outline-danger"}`} onClick={() => changeColor()}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <i className={`${isFavorite ? "fa-solid fa-heart" : `${isHovered ? "fa-solid fa-heart-crack text-white fs-1" : "fa-solid fa-heart-crack text-danger fs-1"}}`}`}></i>
                    </button> */}

                </div>
            </div>


        </>
    )

};

