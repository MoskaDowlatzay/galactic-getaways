import React from "react";
import "./styleRocket.css";
import "../App.css";

export default function RocketCard({
  rocket,
  mission,
  provider,
  date,
  location,
  country,
  launchDescription,
  missionDescription,
}) {
  return (
    <div className="rocketCard spacecard">
      <div className="content">
        <ul>
          <li>
            <h3>Rocket: {rocket} </h3>
          </li>
          <li>
            <h6>Mission:</h6> {mission}
          </li>
          <li>
            <h6>Provider:</h6> {provider}
          </li>
          <li>
            <h6>Launch Date:</h6>
            <p>{date}</p>
          </li>
          <li>
            <h6>Launch Location:</h6>
            <p>
              {location}, {country}
            </p>
          </li>
          <li>
            <h6>Description:</h6>
            <p>{launchDescription}</p>
            <p>{missionDescription}</p>
          </li>
        </ul>
        <div className="card-footer">
        <button className="btn btn-info">
          Add to Favourites
        </button>
        </div>
      </div>
    </div>
  );
}
