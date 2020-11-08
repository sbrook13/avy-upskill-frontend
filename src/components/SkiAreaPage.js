import React, {useState, useEffect} from 'react';
import SkiAreaAddForm from './SkiAreaAddForm';
import SkiAreaList from './SkiAreaList';
import MapContainer from './MapContainer';
import {setMarkersFromBackend, handleSetStateOnClick, parseJSON} from '../utils/functions'
import {areasURL} from '../constants'

function SkiAreaPage() {

  const [viewType, setViewType] = useState("map")
  const [backcountryAreas, setBackcountryAreas] = useState([])
  const [markers, setMarkers] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const fetchAreasData = () => {
      fetch(`${areasURL}`)
        .then(parseJSON)
        .then(data => {
          setBackcountryAreas(data)
          setMarkersFromBackend(data)
        })
        .catch() 
    }
    fetchAreasData()
  }, [])

  // const setMapMarkers = (allPoints) => {
  //   let cumulativeArray =[]
  //   allPoints.map(point => {
  //     let marker = {
  //       markerOffset: -30,
  //       name: `${point.name}`,
  //       coordinates: [point.lon, point.lat]
  //     }
  //     cumulativeArray = [...cumulativeArray, marker]
  //   })
  //   setMarkers(cumulativeArray)
  // }

  const showChoice = () => {
    switch (viewType) {
      case 'map': 
        return <MapContainer markers={markers} type={"skiing"} setSelected={setSelected}/>;
      case 'list':
        return <SkiAreaList areas={markers}/>;
      case 'add':
        return <SkiAreaAddForm markers={markers} type={"area"}/>;
    }
  }

  return (
    <div className="SkiAreaPage main-section">
      <section className="page-title beacon-title">
        <h2>Beginner Backcountry Zones</h2>
        <p>Looking for easy-to-access low angle terrain to explore backcountry skiing? See the map below for user recommendations!</p>
        <p>Not seeing an area you love? Join the community by creating an account - add areas, comments, ratings, or bookmark areas to explore back to later!</p>
      </section>
      <section>
        <button className="button" onClick={(_) => handleSetStateOnClick(_, setViewType, 'map')}>See Map</button>
        <button className="button" onClick={(_) => handleSetStateOnClick(_, setViewType, 'list')}>See List</button>
        <button className="button" onClick={(_) => handleSetStateOnClick(_, setViewType, 'add')}>Add An Area</button>
      </section>
      {showChoice()}
    </div>
  );
}

export default SkiAreaPage;