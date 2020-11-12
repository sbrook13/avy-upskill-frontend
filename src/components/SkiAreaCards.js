import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart,
 } from '@fortawesome/free-solid-svg-icons';
import StarRating from './StarRating'

function SkiAreaCards({user, areas, selected, setSelected}) {

  const handleClick = (_, selection) => {
    setSelected(selection)
  }

  const listItems = () => {
    return areas.map(area => {
      return (
        <>
        <div className="area-cards spread-section" onClick={(_) => handleClick(_, area)}>
          <div className="area-title stack-sections">
            <h4>{area.name}</h4>
            <p>{area.location}</p>
            <div className="star-rating">
              {area.ratings[0] ?
                <StarRating ratings={area.ratings} /> :
                <p className="small-text">No Ratings Yet</p>
              }
            </div>
          </div>
        </div>
        </>
      )
    })
  }

  return (
    <div className="cards-section">
      {listItems()}
    </div>
  );
}

export default SkiAreaCards;