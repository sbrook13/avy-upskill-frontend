import React, {useState} from 'react';
import ReactTooltip from 'react-tooltip';
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

function MapContainer({markers, markerName, setMarkerName}) {

  return (
    <div className="MapContainer">
        <ComposableMap 
          className="co-map" 
          projection="geoAlbers"
          projectionConfig={{ 
            scale: 7000,
            rotate: [100, .5, 4],
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
              {markers.map(({ name, coordinates, markerOffset }) => (
                <>
                  <Marker 
                    key={name} 
                    coordinates={coordinates}
                    onClick={() => console.log(`${name}`)}
                    onMouseEnter={() => {
                      setMarkerName(`${name}`);
                    }}
                    onMouseLeave={() => {
                      setMarkerName("");
                    }}
                  >
                    <g
                    fill="none"
                    stroke="#FF5533"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                    data-tip
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
                  <ReactTooltip type="warning" place="top" effect="float">
                    Testing!
                  </ReactTooltip>
                </>
              ))}
            </ZoomableGroup>
        </ComposableMap> 
    </div>
  );
}

export default MapContainer;