import React, {useState} from 'react';

function AddAreaForm({user}, {markers}, {setMarkers}) {

  return (
    <section className="add-form">
      <h3>Add a Backcountry Zone</h3>
      <form className="stack-sections">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="ex: Berthoud Pass" />
        <label for="city">Nearest City</label>
        <input type="text" id="city" name="nearest_city" placeholder="ex: Empire, CO" />
        <div className="spread-section">
          <div className="stack-sections">
            <label for="lat">Latitude</label>
            <input type="float" id="lat" name="lat" placeholder="ex: 39.7983" />
          </div>
          <div className="stack-sections">
            <label for="lon">Longitude</label>
            <input type="float" id="lon" name="lon" placeholder="ex: -105.7778" />
          </div>
        </div>
        <label for="description">Description</label>
        <textarea rows="10" cols="30" id="description" name="description" className="text-input" placeholder="ex: talk about parking, approach, terrain traps, and secret stashes!"/>
        <button type="submit" className="button">Submit</button>
      </form>
    </section>
  );
}

export default AddAreaForm;