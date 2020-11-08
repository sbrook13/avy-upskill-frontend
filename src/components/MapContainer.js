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

const geoUrl = "./co_w_counties.json";

function MapContainer({markers, type, setSelected}) {

  const [markerName, setMarkerName] = useState("")

  const setArea = (event, selection) => {
    setSelected(selection)
  }

  const setMarkers = () => {
    return markers.map(marker => {
      return (
        <Marker 
          key={marker.name} 
          data-tip=''
          coordinates={marker.coordinates}
          onClick={() => console.log(`${marker.name}`)}
          onMouseEnter={() => {
            setMarkerName(`${marker.name}`);
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
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
        </Marker>
      )}
    )
  }

  return (
    <div className="MapContainer stack-sections" >
      <div className="stack-sections min-height">
        <p>Click to learn more about {type} at:</p>
        <p className="bold">{markerName}</p>
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
              {setMarkers()}
              <ReactTooltip>{markerName}</ReactTooltip>
            </ZoomableGroup>
          </ComposableMap> 
      </div>
    </div>
  );
}

export default MapContainer;