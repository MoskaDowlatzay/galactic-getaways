import React from "react";
import Button from 'react-bootstrap/Button';
import "./styleLaunch.css";

export default function LaunchCard({ name, image, date, flight, webcast }) {
    return (
        <div className="launchCard">
            <div 
                className="img-container" 
                style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: 'rgba(25, 118, 81, 0.4)'
                    }}>
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
                        <Button 
                            className="rocketButton"
                            style={{
                                backgroundColor: 'rgba(46, 229, 157, 0.6)',
                                border: "none"
                            }}
                            variant="info"
                        >
                            Watch the Launch
                        </Button>
                    </a>
                </li>
                </ul>
            </div>
        </div>
    );
}