import React, {useState} from 'react';

function BeaconParkList({beaconParks}) {

  const handleClick = (_, selection) => {

  }

  const listBeaconParks = () => {
    return beaconParks.map(park => {
      return (
        <div className="list-item">
          <h4>{park.name}</h4>
          <p>{park.description}</p>
        </div>
      )
    })
  }

  return (
    <div className="stack-sections">
      {listBeaconParks()}
    </div>
  );
}

export default BeaconParkList;