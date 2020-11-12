import React, {useState, useEffect} from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";
import {coCities} from '../constants'
import {displayMarkers, setCityMarkers} from '../utils/displayMarkers'

const geoUrl = "./co_w_counties.json";

function MapContainer({markers, subtitle, type, setSelected}) {

  const [markerName, setMarkerName] = useState("")

  const handleMarkerClick = (_, marker) => {
    if ( type === "area"){
      setSelected(marker.fullInfo)
    }
  }

  useEffect(() => {
    displayMarkers(markers)
  }, [markers])

  return (
    <div className="MapContainer stack-sections" >
      <div className="stack-sections map-nav">
        <p>{subtitle}</p>
        <h4 className="bold">{markerName}</h4>
      </div>
      <div>
          <ComposableMap 
            className="co-map" 
            projection="geoAlbers"
            projectionConfig={{ 
              scale: 8100,
              rotate: [100.5, 1.4, 4],
            }}
          > 
            <ZoomableGroup 
              center={[-105.59, 39.07]}
            >
              <Geographies geography={geoUrl}>
                {({geographies}) =>
                geographies.map((geo) => ( 
                  <>
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      stroke="#28465b"
                      onClick={
                        () => {
                          console.log(geo.properties.NAME_2)
                        }
                      }
                      style={{
                        default: {
                        fill: "#1a354b",
                        },
                        hover: {
                        fill: "#1a354b",
                        },
                        pressed: {
                        fill: "#4c93ce",
                        }
                      }}
                    />
                  </>
                ))
                }
              </Geographies>
              {setCityMarkers(coCities)}
              {displayMarkers(markers, setMarkerName, handleMarkerClick)}
            </ZoomableGroup>
          </ComposableMap> 
      </div>
    </div>
  );
}

export default MapContainer;