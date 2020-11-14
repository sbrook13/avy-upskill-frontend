import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  
  return (
    <div className="footer">
      <div className="stack-sections">
        <h4>AvyUpskill 2020</h4>
        <p>Created by:</p> 
        <h4>Shelley Brook</h4>
        <p>
          <a 
            href="mailto:sbrook13@gmail.com" 
            target="_blank">
            <FontAwesomeIcon icon={faEnvelopeSquare} className="footer-icon" size="2x" />
          </a>
          <a 
          href="https://www.linkedin.com/in/sbrook13/" 
          target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" size="2x" />
          </a>

        </p>
      </div>
      <div>
        <a href="https://www.avalanche.state.co.us/" target="_blank">
          <button className="button">Checkout the CAIC Avalanche Forecast</button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
