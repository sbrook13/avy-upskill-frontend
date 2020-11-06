import React, {useState} from 'react';
import SkiAreaAddForm from './SkiAreaAddForm';
import SkiAreaMapSection from './SkiAreaMapSection';
import SkiAreaList from './SkiAreaList';
import ReactTooltip from 'react-tooltip';
import {areasURL} from '../constants'

function SkiAreaPage() {

  const [showDetails, setDetails] = useState("map")

  const handleClick = (_, choice) => {
    setDetails(choice)
  }

  const markers = [
    { markerOffset: -30,
      name: "Berthoud Pass",
      coordinates: [-105.59, 39.07],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { markerOffset: -30,
      name: "Loveland Pass",
      coordinates: [-106.0667, 39.4803],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { markerOffset: -30,
      name: "Baldy Mountain",
      coordinates: [-105.8719, 39.6425],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { markerOffset: -30,
      name: "Hidden Valley",
      coordinates: [-105.3392, 39.6947],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]

  const showChoice = () => {
    switch (showDetails) {
      case 'map': 
        return <SkiAreaMapSection markers={markers}/>;
      case 'list':
        return <SkiAreaList areas={markers}/>;
      case 'area':
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
        <button className="button" onClick={(_) => handleClick(_, 'map')}>See Map</button>
        <button className="button" onClick={(_) => handleClick(_, 'list')}>See List</button>
        <button className="button" onClick={(_) => handleClick(_, 'area')}>Add An Area</button>
      </section>
      {showChoice()}
    </div>
  );
}

export default SkiAreaPage;