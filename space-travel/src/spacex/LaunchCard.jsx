import React from "react";
import Button from 'react-bootstrap/Button';
import "./styleLaunch.css";

export default function LaunchCard({ name, image, date, flight, webcast }) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={name} src={image} />
            </div>
            <div className="content">
                <ul>
                <li>
                    <strong>Rocket Name:</strong> 
                    <p>{name}</p>
                </li>
                <li>
                    <strong>Launch Date:</strong> 
                    <p>{date}</p>
                </li>
                <li>
                    <strong>Flight:</strong> {flight}
                </li>
                <li>
                    <a href={webcast} target="_blank">
                        <Button variant="info">Webcast</Button>
                    </a>
                </li>
                </ul>
            </div>
        </div>
    );
}