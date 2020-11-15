import React, {useState, useEffect} from 'react';
import SkiAreaAddForm from './SkiAreaAddForm';
import SkiAreaCards from './SkiAreaCards';
import SkiDetails from './SkiDetails';
import MapContainer from './MapContainer';
import {setMarkerFormat, handleSetStateOnClick, parseJSON} from '../utils/functions'
import {areasURL} from '../constants'
import { displayMarkers } from '../utils/displayMarkers';

function SkiAreaPage({user, history}) {

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
          setMarkerFormat(data, setMarkers)
        })
        .catch() 
    }
    fetchAreasData()
  }, [])

  useEffect(() => {
    setMarkerFormat(backcountryAreas, setMarkers)
  }, [backcountryAreas])
  
  
  useEffect(() => {
    displayMarkers(markers)
  }, [markers])

  const showViewChoice = () => {
    if (selected) {
      return <SkiDetails user={user} selected={selected} setSelected={setSelected} />;
    } else{
      switch (viewType) {
        case 'map': 
          return <MapContainer markers={markers} subtitle={"Click to learn more about skiing at:"} type={"area"} setSelected={setSelected}/>;
        case 'list':
          return <SkiAreaCards user={user} areas={backcountryAreas} selected={selected} setSelected={setSelected} />;
        case 'add':
          return <SkiAreaAddForm 
            user={user} 
            backcountryAreas={backcountryAreas} 
            setBackcountryAreas={setBackcountryAreas} 
            history={history} 
            type={setViewType}
          />;
        default:
          return <MapContainer markers={markers} subtitle={"Click to learn more about skiing at:"} type={"area"} setSelected={setSelected}/>;
      }
    }
  }

  const handleButtonClick = (event, state, choice) => {
    setSelected(null)
    state(choice)
  }

  return (
    <div className="SkiAreaPage main-section">
      <section className="page-title beacon-title">
        <h1>Beacon✓  Probe✓  Shovel✓</h1>
        <h2>Explore Beginner Backcountry Zones</h2>
        <p>Looking for easy-to-access low angle terrain to explore backcountry skiing? See the map below for user recommendations!
          Not seeing an area you love? Join the community by creating an account - add areas, comments, ratings, or bookmark areas to explore back to later!</p>
      </section>
      <section>
        <button 
          className="button" 
          style={{backgroundColor: viewType === 'map' ? "#FF5533" : "#1a354b"}}
          onClick={(_) => handleButtonClick(_, setViewType, 'map')}
        >
          See Map
        </button>
        <button 
          className="button"
          style={{backgroundColor: viewType === 'list' ? "#FF5533" : "#1a354b"}} 
          onClick={(_) => handleButtonClick(_, setViewType, 'list')}
        >
          See List
        </button>
        { user ?
          <button 
            className="button" 
            style={{backgroundColor: viewType === 'add' ? "#FF5533" : "#1a354b"}}
            onClick={(_) => handleButtonClick(_, setViewType, 'add')}
          >
            Add An Area
          </button> :
          null
        }
        
      </section>
      {showViewChoice()}
    </div>
  );
}

export default SkiAreaPage;