import React, { useState } from "react";
import { Card, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import "../App.css";

const RocketCard = ({
  rocket,
  mission,
  provider,
  date,
  location,
  country,
  launchDescription,
  missionDescription,
}) => {
  // hide tooltip
  const [showTooltip, setShowTooltip] = useState(false);

  // handle adding to local storage
  const handleAddToFavorites = () => {
    // Get existing favorites from local storage (if any)
    const existingFavorites = JSON.parse(localStorage.getItem('rocketFavorites')) || [];

    // Create a new favorite object based on the card data
    const newFavorite = {
      rocket,
      mission,
      provider,
      date,
      location,
      country,
      launchDescription,
      missionDescription,
    };

    // Add the new favorite to the existing favorites array
    const updatedFavorites = [...existingFavorites, newFavorite];

    // Save the updated favorites to local storage
    localStorage.setItem('rocketFavorites', JSON.stringify(updatedFavorites));

    // Show the tooltip
    setShowTooltip(true);
    console.log(setShowTooltip)

    // Hide the tooltip after a delay (e.g., 3 seconds)
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);

  };

  const renderTooltip = () => (
    <Tooltip id="favBtnTooltip">
      Added to your list! 🚀
    </Tooltip>
  );
  
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
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip}
          show={showTooltip}
        >
          <Button 
            className="rocketButton"
            style={{
              backgroundColor: 'rgba(46, 229, 157, 0.4)',
              border: "none"
            }}
            variant="info" 
            onClick={handleAddToFavorites}
          >
            Add to my List
          </Button>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  );
}

export default RocketCard;
