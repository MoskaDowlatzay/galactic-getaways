import React, { useState, useEffect } from "react";
// import RocketCard from '../RocketLaunch/RocketCard';
import FavoriteCard from './FavoriteCard';
import '../App.css';

export default function Favorites() {
    const [rocketArr, setRocketArr] = useState([]);

    useEffect(() => {
    // Retrieve favorites from local storage
    const favoritesFromStorage = JSON.parse(localStorage.getItem('rocketFavorites')) || [];
    setRocketArr(favoritesFromStorage);
    }, []);

    const removeFromFavorites = (removedRocket) => {
    // Remove the item from the state
    const updatedFavorites = rocketArr.filter(rocket => rocket !== removedRocket);
    setRocketArr(updatedFavorites);

    // Save the updated favorites to local storage
    localStorage.setItem('rocketFavorites', JSON.stringify(updatedFavorites));
    };

    return (
    <div className="container mx-auto">
        <h1 
            style={{ 
                marginTop: '30px', 
                marginBottom: "30px", 
                color: 'white', 
                textAlign: 'center' 
                }}
            >
                My List: Rocket Launches
        </h1>
        <p
            style={{
            color: "#d7fece",
            textAlign: "center",
            fontSize: "1.2rem",
            marginBottom: "25px",
            }}
            >
            What would it be like to be aboard of one of these rockets?
        </p>
        <div className="row">
        {rocketArr.map((rocket, index) => (
            <div key={index} className="col-lg-4 mb-4">
            <FavoriteCard
                {...rocket} // Pass all rocket properties as props
                onRemoveFromFavorites={() => removeFromFavorites(rocket)}
            />
            </div>
        ))}
        </div>
    </div>
    );
}
