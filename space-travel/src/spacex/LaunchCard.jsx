import React from "react";
import Button from 'react-bootstrap/Button';
import "./style.css";

export default function LaunchCard({ name, date, flight, webcast }) {
    return (
        <div className="card">
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