import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart,
 } from '@fortawesome/free-solid-svg-icons';
import StarRating from './StarRating'

function SkiAreaCards({user, areas, selected, setSelected}) {

  const handleClick = (_, selection) => {
    console.log(selection, "was clicked!")
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
              <StarRating ratings={area.ratings} />
            </div>
          </div>
          {/* <div className="like-button-section stack-sections right-align space-between">
            <FontAwesomeIcon className="like-button" icon={faHeart} size="1x" />
              <button >Learn More</button>
            </div> 
          */}
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