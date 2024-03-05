import '../App.css'
import React, { useState, useEffect } from "react";
import { getLaunches } from "./SpaceXAPI";
import LaunchCard from './LaunchCard';


export default function LaunchData() {
  const [launchArr, setLaunches] = useState([])

  useEffect(() => {
    (async() => {
      let myLaunches = await getLaunches()
      setLaunches(myLaunches.data)
    })()
  },[]);

  return (
  <div className="container mx-auto">
      <h1 style={{ marginTop: '100px', color: 'white' }}>SpaceX Launches</h1>
      <div className="row">
        {launchArr.map((launch) => (
          <div key={launch.id} className="col-lg-4 mb-4">
            <LaunchCard
              name={launch.name}
              image={launch.links.patch.small}
              date={launch.date_local}
              flight={launch.flight_number}
              webcast={launch.links.webcast}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
