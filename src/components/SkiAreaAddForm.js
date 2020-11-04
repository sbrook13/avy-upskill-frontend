import React, {useState} from 'react';

function AddAreaForm() {

  return (
    <section>
      <h3>Add a Ski Area!</h3>
      <form className="stack-sections">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="ex: Berthoud Pass" />
        <label for="city">Nearest City</label>
        <input type="text" id="city" name="nearest_city" placeholder="ex: Empire, CO" />
        <label for="description">Description</label>
        <input type="text" id="description" name="description"/>
      </form>
    </section>
  );
}

export default AddAreaForm;