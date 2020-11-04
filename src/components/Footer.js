import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEdit,
  faBullseye,
  faSkiing
 } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  
  const hoverIcon = (event, selection) => {

  }

  return (
    <div className="footer">
      <div className="stack-sections">
        <h4>AvyUpskill 2020</h4>
        <p>Created by Shelley Brook</p>
        <a href="https://www.linkedin.com/in/sbrook13/" target="_blank">Contact</a>
      </div>
      <div className="right-align">
        <a href="mailto:sbrook13@gmail.com">
          <img src="https://assets.stickpng.com/thumbs/58485698e0bb315b0f7675a8.png" alt="email icon"/>
        </a>
        <a href="https://www.linkedin.com/in/sbrook13/" target="_blank">
          <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png" alt="linkedin icon"/>
        </a>
        <a href="https://github.com/sbrook13" target="_blank">
          <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="GitHub icon"/>
        </a>
      </div>
    </div>
  );
}

export default Footer;
