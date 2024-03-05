import React from "react";
import "./style.css";
import "../App.css";

export default function LaunchCard({
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
    <div className="card spacecard">
      <div className="content">
        <ul>
          <li>
            <h3>Rocket: {rocket} </h3>
          </li>
          <li>
            <strong>Mission:</strong> {mission}
          </li>
          <li>
            <strong>Provider:</strong> {provider}
          </li>
          <li>
            <strong>Launch Date:</strong>
            <p>{date}</p>
          </li>
          <li>
            <strong>Launch Location:</strong>
            <p>
              {location}, {country}
            </p>
          </li>
          <li>
            <strong>Description:</strong>
            <p>{launchDescription}</p>
            <p>{missionDescription}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
