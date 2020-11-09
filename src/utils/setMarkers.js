import { Marker } from "react-simple-maps";

export function setMarkers(markers, setFunction, color) {
  return markers.map(marker => {
    return (
      <Marker 
        key={marker.name} 
        coordinates={marker.coordinates}
        onClick={() => console.log(`${marker.name}`)}
        onMouseEnter={() => {
          setFunction(`${marker.name}`);
        }}
        onMouseLeave={() => {
          setFunction("");
        }}
      >
        <g
        fill="none"
        stroke='#FF5533'
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

export function setCityMarkers(markers) {
  return markers.map(marker => {
    return (
      <Marker key={marker.name} coordinates={marker.coordinates} >
        <circle r={5} fill="#5a778c" stroke="#5a778c" strokeWidth={2} />
        <text
          textAnchor="middle"
          y='-15'
          style={{ fontFamily: "system-ui", fill: "#5a778c" }}
        >
          {marker.name}
        </text>
      </Marker>
    )}
  )
}