import React from 'react';
import MapContainer from './MapContainer';

function SkiAreaPage() {

  const markers = [
    { markerOffset: -30,
      name: "Berthoud Pass",
      coordinates: [-105.59, 39.07]
    },
    { markerOffset: -30,
      name: "Loveland Pass",
      coordinates: [-106.0667, 39.4803]
    },
    { markerOffset: -30,
      name: "Baldy Mountain",
      coordinates: [-105.8719, 39.6425]
    },
    { markerOffset: -30,
      name: "Hidden Valley",
      coordinates: [-105.3392, 39.6947]
    },
  ]

  return (
    <div className="SkiAreaPage main-section">
      <section className="page-title beacon-title">
        <h2>Beginner Backcountry Zones</h2>
        <p></p>
      </section>
      <MapContainer markers={markers}/>
    </div>
  );
}

export default SkiAreaPage;