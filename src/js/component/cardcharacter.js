import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// export const Cardcharacter = (props) => {
//     

//     const { store, actions } = useContext(Context);
//     return (


//     );
// };
export const Cardcharacter = (props) => {

    console.log('props desde cardcharcartes ', props);

    const { store, actions } = useContext(Context);
    return (
        <>
            <p>Cardcharacter</p>
            <div className="card" style={{ width: "18rem" }}>
                <img src={rigoImage} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title" >{props.name}</h5>
                    <p className="card-text">Género: {props.gender}</p>
                    <p className="card-text">Color del pelo: {props.hair_color}</p>
                    <p className="card-text">Color de ojos: {props.eye_color} </p>
                    <Link to={"/character/"} className="btn btn-primary">Ver más</Link>

                </div>
            </div>


        </>
    )

};