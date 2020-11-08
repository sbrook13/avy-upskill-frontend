import React, {useState} from 'react';
import { handleSetStateOnClick } from '../utils/functions';

function CourseDetail({selected, showAllCourses}) {
  
  return (
    <div className="details-card">
      <div className="go-back">
        <button className="page-number" onClick={()=>showAllCourses()}>x</button>
      </div>
      <h2>{selected.class_type} in {selected.location}</h2>
      <h3>with {selected.provider}</h3>
      <h4>Dates</h4>
      <p>{selected.start_date} to {selected.end_date}</p>
      <h4>Cost</h4>
      <p>{selected.cost}</p>
      <h4>Contact</h4>
      <p>Phone: {selected.phone}</p>
      <a href={selected.provider_url}>{selected.provider_url}</a>
      <div>
        <a href={selected.aiare_url} target="_blank">
          <button className="button" >{selected.class_type} Details</button>
        </a>
        <a href={selected.details_url} target="_blank">
          <button className="button">Register</button>
        </a>
      </div>
    </div>
  );
}

export default CourseDetail;