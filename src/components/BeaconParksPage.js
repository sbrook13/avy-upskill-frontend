import React, {useEffect, useState} from 'react';
import MapContainer from './MapContainer';
import BeaconParkList from './BeaconParkList';
import {parksURL} from '../constants';

function BeaconParksPage() {

  const [beaconParks, setBeaconParks] = useState([])
  const [markers, setMarkers] = useState([])

  useEffect(() => {
    const fetchBeaconParkData = () => {
      fetch(`${parksURL}`)
        .then(response => response.json())
        .then(data => {
          setBeaconParks(data)
          setParks(data)
        })
        .catch() 
    }
    fetchBeaconParkData()
  }, [])

  const setParks = (parks) => {
    let parksArray =[]
    if (parks[0]) {
      parks.map(park => {
        let marker = {
          markerOffset: -30,
          name: `${park.name}`,
          coordinates: [parseFloat(park.lon), parseFloat(park.lat)]
        }
        console.log(marker)
        parksArray = [...parksArray, marker]
      })
      setMarkers(parksArray)
    }
    
  }

  return (
    <div className="BeaconParks main-section">
      <section className="page-title beacon-title">
        <img src="https://content.backcountry.com/promo_upload/bcs/brand/backcountry-access/BCA_Logo.png" alt="Backcountry Access Logo"/>
        <h2>Colorado's Free Beacon Parks</h2>
        <p>Beacon parks provide an easy, convenient way to practice your skills. The parks are free, open to the public, simple, and always on and available. Each park may be a bit different but all are easy to use and have instructions. They have switches to turn on one or more buried transceivers.</p>
      </section>
      <MapContainer markers={markers} />
      <BeaconParkList beaconParks={beaconParks} />
    </div>
  );
}

export default BeaconParksPage;