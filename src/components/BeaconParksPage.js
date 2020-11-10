import React, {useEffect, useState} from 'react';
import ReactTooltip from 'react-tooltip';
import MapContainer from './MapContainer';
import BeaconParkList from './BeaconParkList';
import {setMarkersFromBackend, handleSetStateOnClick, parseJSON} from '../utils/functions'
import {parksURL} from '../constants';

function BeaconParksPage() {

  const [beaconParks, setBeaconParks] = useState([])
  const [markers, setMarkers] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const fetchBeaconParkData = () => {
      fetch(`${parksURL}`)
        .then(parseJSON)
        .then(data => {
          setBeaconParks(data)
          setMarkersFromBackend(data, setMarkers)
        })
        .catch() 
    }
    fetchBeaconParkData()
  }, [])

  return (
    <div className="BeaconParks main-section">
      <section className="page-title beacon-title">
        <a href="https://backcountryaccess.com/" target="_blank">
          <img src="https://content.backcountry.com/promo_upload/bcs/brand/backcountry-access/BCA_Logo.png" alt="Backcountry Access Logo"/>
        </a>
        <h2>Colorado's Free Beacon Parks</h2>
        <p>Beacon parks provide an easy, convenient way to practice your skills. The parks are free, open to the public, simple, and always on and available. Each park may be a bit different but all are easy to use and have instructions. They have switches to turn on one or more buried transceivers.</p>
      </section>
      <div className="split-half">
        <MapContainer markers={markers} subtitle={"Highlight a marker to see Beacon Park location:"} type={"beacon park"} setSelected={setSelected}/>
        <BeaconParkList beaconParks={beaconParks} />
      </div>
    </div>
  );
}

export default BeaconParksPage;