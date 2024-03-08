import "../App.css";
import React, { useState, useEffect } from "react";
import { getRockets } from "./RocketLaunchAPI";
import RocketCard from "./RocketCard";

export default function RocketData() {
  const [rocketArr, setRockets] = useState([]);
  useEffect(() => {
    (async () => {
      let myRockets = await getRockets();
      setRockets(myRockets.data.result);
    })();
  }, []);

  return (
    <div className="container mx-auto">
      <h1
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          color: "white",
          textAlign: "center",
        }}
      >
        Next 5 Rocket Launches
      </h1>
      <p
        style={{
          color: "#d7fece",
          textAlign: "center",
          fontSize: "1.2rem",
          marginBottom: "25px",
          }}
          >
        Check the rockets scheduled to leave the Earth's gravity in the next few days and save them to your list.
      </p>
      <div className="row">
        {rocketArr.map((rocket) => (
          <div key={rocket.id} className="col-lg-4 mb-4">
            <RocketCard
              rocket={rocket.vehicle.name}
              mission={rocket.name}
              provider={rocket.provider.name}
              location={rocket.pad.location.name}
              country={rocket.pad.location.country}
              date={rocket.t0}
              launchDescription={rocket.launch_description}
              missionDescription={rocket.mission_description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
