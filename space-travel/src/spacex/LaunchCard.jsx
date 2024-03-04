import React from "react";

export default function LaunchCard({ image, name, date, flight }) {
    return (
        <div className="card">
            {/* <div className="img-container">
                <img alt={name} src={image} />
            </div> */}
            <div className="content">
                <ul>
                <li>
                    <strong>Name:</strong> {name}
                </li>
                <li>
                    <strong>Date:</strong> {date}
                </li>
                <li>
                    <strong>Flight:</strong> {flight}
                </li>
                </ul>
            </div>
        </div>
    );
}