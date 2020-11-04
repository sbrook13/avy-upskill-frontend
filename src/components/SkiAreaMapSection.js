import React, {useState} from 'react';
import MapContainer from './MapContainer';
import ReactTooltip from 'react-tooltip';

function SkiAreaMapSection({markers}) {
  const [markerName, setMarkerName] = useState("")
  const [selectedArea, setSelectedArea] = useState(null)

  const displayAreaDetails = () => {
    if (selectedArea) {
      console.log("display details")
      return (
        <>
          <h2>{selectedArea.name}</h2>
          <p>nearest city</p>
          <p>description...</p>
        </>
      )
    }
  }

  const setArea = (event, selection) => {
    setSelectedArea(selection)
  }

  const removeSelection = () => {
    setSelectedArea(null)
  }

  const displayDefault = () => {
    console.log("default!!")
    return (
      <>
        <section>
          <h2>Click on a Marker to Learn More!</h2>
          <p>nearest city</p>
          <p>description...</p>
        </section>
      </>
    )
  }

  return (
      <section className="flex-container-center">
        <MapContainer markers={markers} setMarkerName={setMarkerName} markerName={markerName}/>
        <div className="ski-sidebar stack-sections space-between">
          {selectedArea ? displayAreaDetails(selectedArea) : displayDefault() }
        </div>
      </section>
  );
}

export default SkiAreaMapSection;;