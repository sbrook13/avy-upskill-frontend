import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart,
 } from '@fortawesome/free-solid-svg-icons';


function SkiAreaList({areas}) {

  const handleClick = (_, selection) => {

  }

  const listItems = () => {
    return areas.map(area => {
      return (
        <div className="list-item area-cards">
          <div className="stack-sections area-title">
            <h4>{area.name}</h4>
            <p>{area.location}</p>
            <p className="rating">****</p>
            <a href="">See / Add Comment</a>
          </div>
          <p className="description">{area.description}</p>
          <button className="button page-number">
            <FontAwesomeIcon icon={faHeart} 
              size="1x"
            />
          </button>
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