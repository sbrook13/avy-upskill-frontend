import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";
import {geoAlbers} from "d3-geo";

const geoUrl = "./co_w_counties.json";

function MapContainer({markers}) {

  return (
    <div className="MapContainer">
        <ComposableMap 
          className="co-map" 
          projection="geoAlbers"
          projectionConfig={{ 
            scale: 7000,
            rotate: [100, 0, 4],
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
                    // projection={projection}
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
              {markers.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates}>
                  <g
                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>
                  <text
                  textAnchor="middle"
                  y={markerOffset}
                  style={{ fontFamily: "system-ui", fill: "white" }}
                  >
                  {/* {name} */}
                  </text>
                </Marker>
              ))}
            </ZoomableGroup>
        </ComposableMap> 
    </div>
  );
}

export default MapContainer;