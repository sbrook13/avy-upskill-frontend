import React, {useState} from 'react';

function SkiAreaList({areas}) {

  const handleClick = (_, selection) => {

  }

  const listItems = () => {
    return areas.map(area => {
      return (
        <div className="list-item">
          <h4>{area.name}</h4>
          <p>{area.description}</p>
        </div>
      )
    })
  }

  return (
    <div className="stack-sections">
      {listItems()}
    </div>
  );
}

export default SkiAreaList;