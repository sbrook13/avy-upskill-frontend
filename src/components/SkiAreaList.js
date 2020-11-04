import React, {useState} from 'react';
import SkiAreaAddForm from './SkiAreaAddForm';
import SkiAreaMapSection from './SkiAreaMapSection';
import ReactTooltip from 'react-tooltip';

function SkiAreaList({markers}) {

  const handleClick = (_, selection) => {

  }

  const listSkiAreas = () => {
    return markers.map(marker => {
      return (
        <div className="list-item">
          <h4>{marker.name}</h4>
          <p>{marker.description}</p>
        </div>
      )
    })
  }

  return (
    <div className="stack-sections">
      {listSkiAreas()}
    </div>
  );
}

export default SkiAreaList;