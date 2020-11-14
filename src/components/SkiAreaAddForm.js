import React, {useState} from 'react';
import {handleChange, setMarkerFormat} from '../utils/functions'
import { postToBackend } from '../utils/postToBackend';
import { areasURL } from '../constants';
import {displayMarkers} from '../utils/displayMarkers'


function SkiAreaAddForm({user, backcountryAreas, setBackcountryAreas, markers, setMarkers, history, type}) {

  const [name, setNameInput] = useState("")
  const [location, setLocationInput] = useState("")
  const [lat, setLatitudeInput] = useState("")
  const [lon, setLongitudeInput] = useState("")
  const [description, setDescriptionInput] = useState("")

  function handleSubmit(event){
    event.preventDefault()
    const areaInfo = { name, location, lat, lon, description }
    renderArea(areaInfo)
    postToBackend(areaInfo, areasURL, "POST")
    const areaForm = document.querySelector('#add-area-form')
    areaForm.reset() 
    type("map")
    history.push('/backcountry-zones')
  }

  function renderArea(areaInfo){
    setBackcountryAreas([...backcountryAreas, areaInfo])
  }

  return (
    <section className="add-form">
      <h3>Add a Backcountry Zone</h3>
      <form className="stack-sections" id="add-area-form" onSubmit={(_) => handleSubmit(_)}>
        <label for="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="ex: Berthoud Pass" 
          onChange={(_) => handleChange(_, setNameInput)}
        />
        <label for="city">Nearest City</label>
        <input 
          type="text" 
          id="city" 
          name="nearest_city" 
          placeholder="ex: Empire, CO" 
          onChange={(_) => handleChange(_, setLocationInput)}
        />
        <div className="spread-section">
          <div className="stack-sections">
            <label for="lat">Latitude</label>
            <input 
              type="float" 
              id="lat" 
              name="lat" 
              placeholder="ex: 39.7983" 
              onChange={(_) => handleChange(_, setLatitudeInput)}
            />
          </div>
          <div className="stack-sections">
            <label for="lon">Longitude</label>
            <input 
              type="float" 
              id="lon" 
              name="lon" 
              placeholder="ex: -105.7778" 
              onChange={(_) => handleChange(_, setLongitudeInput)}
            />
          </div>
        </div>
        <label for="description">Description</label>
        <textarea 
          rows="10" cols="30" 
          id="description" 
          name="description" 
          className="text-input" 
          placeholder="ex: talk about parking, approach, terrain traps, and secret stashes!"
          onChange={(_) => handleChange(_, setDescriptionInput)}
        />
        <button type="submit" className="button">Submit</button>
      </form>
    </section>
  );
}

export default SkiAreaAddForm;