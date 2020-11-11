import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {parseJSON, handleError} from '../utils/functions'
import WeatherContainer from './WeatherContainer'
import KnowBeforeYouGo from './Kbyg'

function LandingPage() {

  return (
    <div className="landing-page">
      <div className="image-bar">
        <img src="https://i.imgur.com/Oq47pc7.jpg" alt="" />
        <img src="https://i.imgur.com/OULbnFv.jpg" alt="" />
        <img src="https://i.imgur.com/u62oS6L.jpg" alt="" />
        
        <img src="https://i.imgur.com/Rfqxn3z.jpg" alt="" />
      </div>
      <div className="split-section">
        <WeatherContainer />
        {/* <KnowBeforeYouGo /> */}
        <div className="grid-rows landing-categories">
          <div className="nav-sections">
            <div className="stack-sections">
              <h2>Education</h2>
              <p>Find courses from the American Institute for Avalanche Research and Education:</p>
              <ul>
                <li>• Avalanche Rescue</li>
                <li>• AIARE 1</li>
                <li>• AIARE 2</li>
              </ul>
            </div>
            <Link to="/courses">
              <button className="button">COURSES</button>
            </Link>
          </div>
          <div className="nav-sections">
            <div className="stack-sections">
              <h2>Practice</h2>
              <p>Colorado has many free beacon parks where you can bring your gear (beacon, probe, shovel) and practice your skills to find buried signals.</p>
            </div>
            <Link to="/beacon-parks">
              <button className="button">BEACON PARKS</button>
            </Link>
          </div>
          <div className="nav-sections">
            <div className="stack-sections">
              <h2>Experience</h2>
              <p>Not sure where to go? This community sourced page lists low-angle, relatively safe backcountry zones where you can explore and get used to skiing varied terrain.</p>
            </div>
            <Link to="/backcountry-zones">
              <button className="button">BACKCOUNTRY ZONES</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;