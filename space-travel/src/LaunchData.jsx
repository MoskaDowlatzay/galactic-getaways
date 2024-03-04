import './App.css'
import React, { useState, useEffect } from "react";
import { getLaunches } from "./spacex/api";
import LaunchCard from './spacex/LaunchCard';


function LaunchData() {
  const [launchArr, setLaunches] = useState([])
  useEffect(() => {
    (async() => {
      let myLaunches = await getLaunches()
      setLaunches(myLaunches.data)
      console.log(myLaunches.data)
    })()
  },[]);
  console.log(launchArr)

  return (
    <>
      <h1>Upcoming SpaceX Launches</h1>
      {launchArr.map((launch) => (
        <LaunchCard 
          key={launch.id}
          name={launch.name}
          image={launch.links.patch.small}
          date={launch.date_local}
          flight={launch.flight_number}
        />
  ))}
    </>
  )
}

export default LaunchData;
