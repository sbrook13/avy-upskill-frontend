import React, {useState, useEffect} from 'react';
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
        <KnowBeforeYouGo />
      </div>
    </div>
  );
}

export default LandingPage;