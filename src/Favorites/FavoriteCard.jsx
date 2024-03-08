import React from "react";
import { Card, Button } from 'react-bootstrap';
import "../App.css";

const FavoriteCard = ({
    rocket,
    mission,
    provider,
    date,
    location,
    country,
    launchDescription,
    missionDescription,
    onRemoveFromFavorites, // Add a prop for the remove callback
}) => {
    const handleRemoveFromFavorites = () => {
    // Get existing favorites from local storage (if any)
    const existingFavorites = JSON.parse(localStorage.getItem('rocketFavorites')) || [];

    // Find the index of the current card in the favorites array
    const indexToRemove = existingFavorites.findIndex(favorite =>
        favorite.rocket === rocket &&
        favorite.mission === mission &&
        favorite.provider === provider &&
        favorite.date === date &&
        favorite.location === location &&
        favorite.country === country &&
        favorite.launchDescription === launchDescription &&
        favorite.missionDescription === missionDescription
    );

    if (indexToRemove !== -1) {
      // If the card is found in favorites, remove it
        existingFavorites.splice(indexToRemove, 1);

      // Save the updated favorites to local storage
        localStorage.setItem('rocketFavorites', JSON.stringify(existingFavorites));

      // Call the provided callback to trigger a re-render
        onRemoveFromFavorites();
    }
};

return (
    <Card>
        <Card.Header>Rocket: {rocket}</Card.Header>
        <Card.Body>
        <Card.Title>Mission: {mission}</Card.Title>
        <Card.Text>
            <h6>Provider: </h6>{provider}
            <p></p>
            <h6>Launch Date: </h6>{date}
            <p></p>
            <h6>Launch Location: </h6>{location}, {country}
            <p></p>
            <h6>Description: </h6>
            <p>{launchDescription}</p>
            <p>{missionDescription}</p>
        </Card.Text>
        <Button 
            className="rocketButton"
            style={{
                backgroundColor: 'rgba(46, 229, 157, 0.4)',
                border: "none"
            }}
            variant="info" 
            onClick={handleRemoveFromFavorites}
        >
            Remove from Favourites
        </Button>
        </Card.Body>
    </Card>
    );
}

export default FavoriteCard;
