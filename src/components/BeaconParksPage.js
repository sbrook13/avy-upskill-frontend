import React, {useEffect, useState} from 'react';
import MapContainer from './MapContainer';

function BeaconParksPage() {
  const baseURL = 'http://localhost:8000'
  const beaconParksURL = `${baseURL}/beacon_parks/`

  const [beaconParks, setBeaconParks] = useState([])

  // useEffect(() => {
  //   fetchBeaconParkData()
    // const fetchBeaconParkData = async () => {
    //   try {
    //     const response = await fetch(`${beaconParksURL}`);
    //     const data = await response.json();
    //     console.log(data)
    //     setBeaconParks(data)
    //   } catch(err) {
    //     //error handling
    //   }
    // }
    // fetchBeaconParkData()
  // }, [])

  // const fetchBeaconParkData = () => {
  //   fetch(`${beaconParksURL}`)
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .then(data => setBeaconParks(data))
  // }

  const markers = [
    { markerOffset: -30,
      name: "Center of Colorado",
      coordinates: [-105.59, 39.07]
    },
    { markerOffset: -30,
      name: "Breckenridge Ski Resort",
      coordinates: [-106.0667, 39.4803]
    },
    { markerOffset: -30,
      name: "Keystone Ski Resort",
      coordinates: [-105.9437, 39.6084]
    },
    { markerOffset: -30,
      name: "Telluride Ski Resort",
      coordinates: [-107.812286, 37.937492]
    },
    { markerOffset: -30,
      name: "Arapahoe Basin Ski Resort",
      coordinates: [-105.8719, 39.6425]
    },
    { markerOffset: -30,
      name: "Aspen Highlands",
      coordinates: [-106.8554, 39.1824]
    },
    { markerOffset: -30,
      name: "Monarch Mountain Ski Resort",
      coordinates: [-106.3320, 38.5121]
    },
    { markerOffset: -30,
      name: "Powderhorn Ski Resort",
      coordinates: [-108.15556, 39.06306]
    },
    { markerOffset: -30,
      name: "Rocky Mountain National Park - Hidden Valley",
      coordinates: [-105.3392, 39.6947]
    },
    { markerOffset: -30,
      name: "Silverton Avalanche School",
      coordinates: [-107.6639423, 37.8115015]
    },
    { markerOffset: -30,
      name: "Steamboat Ski Resort",
      coordinates: [-106.8045, 40.4572]
    },
    { markerOffset: -30,
      name: "Wolf Creek Ski Resort",
      coordinates: [-106.7932, 37.4724]
    },
  ]


  return (
    <div className="BeaconParks main-section">
      <section className="page-title beacon-title">
        <img src="https://content.backcountry.com/promo_upload/bcs/brand/backcountry-access/BCA_Logo.png" alt="Backcountry Access Logo"/>
        <h3>Colorado's Free Beacon Parks</h3>
        <p>Beacon parks provide an easy, convenient way to practice your skills. The parks are free, open to the public, simple, and always on and available. Each park may be a bit different but all are easy to use and have instructions. They have switches to turn on one or more buried transceivers.</p>
      </section>
      <MapContainer markers={markers}/>
    </div>
  );
}

export default BeaconParksPage;