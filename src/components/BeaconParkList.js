import React, {useState} from 'react';

function BeaconParkList({beaconParks}) {

  const handleClick = (_, selection) => {

  }
  
  const listBeaconParks = () => {
    const sortedList = beaconParks.sort(function(a, b) {
      let keyA = a.name,
        keyB = b.name
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    })

    return sortedList.map(park => {
      return (
        <li>• {park.name}</li>
      )
    })
  }

  return (
    <ul className="stack-sections beacon-list">
      {listBeaconParks()}
    </ul>
  );
}

export default BeaconParkList;