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
        <p>Created by:</p> 
        <h4>Shelley Brook</h4>
        <p>
          <a 
          href="https://www.linkedin.com/in/sbrook13/" 
          target="_blank">
          Email</a> |&nbsp;
          <a 
          href="mailto:sbrook13@gmail.com" 
          target="_blank">
          LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
