import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfAlt as faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';


const StarRating = ({rating}) => {
    const solidStars = [];
    const outlineStars = [];
    for(let i = 1; i <=5; i++){
        if(i <= rating) {
            solidStars.push(<FontAwesomeIcon icon={faStarSolid} className="star-icon solid" style={{ color: "#FF5533" }}/>);
        }
        if (solidStars.length <= 5) {
          for (let i=1; 1<=(5-solidStars.length); i++) {
            outlineStars.push(<FontAwesomeIcon icon={faStarOutline} className="star-icon" />);
          }  
        } 
    return <div className="star-rating">{solidStars}{outlineStars}</div>;
    }
}
export default StarRating;