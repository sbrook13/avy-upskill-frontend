import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfAlt as faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';


const StarRating = ({rating}) => {
    // const stars = [];
    // for(let i = 1; i <=5; i++){
    //     if(i <= rating) {
    //         stars.push(<FontAwesomeIcon icon={faStarSolid} className="star-icon solid" style={{ color: "#FF5533" }}/>);
    //     } else if (i === Math.ceil(rating) && !Number.isInteger(rating)){
    //         stars.push(<FontAwesomeIcon icon={faStarSolid} className="star-icon half-fill" />);
    //     } else{ 
    //         stars.push(<FontAwesomeIcon icon={faStarSolid} className="star-icon outline" />);
    //     }
    // } 
    // return <div className="star-rating">{stars}</div>;

    return (
      <>
        <FontAwesomeIcon icon={faStarSolid} className="star-icon solid" style={{ color: "#FF5533" }} />
        <FontAwesomeIcon icon={faStarSolid} className="star-icon solid" style={{ color: "#FF5533" }} />
        <FontAwesomeIcon icon={faStarSolid} className="star-icon solid" style={{ color: "#FF5533" }} />
        <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon half-fill" style={{ color: "#FF5533" }} />
        <FontAwesomeIcon icon={faStarOutline} className="star-icon outline" style={{ color: "#FF5533" }} />
      </>
    )
}
export default StarRating;