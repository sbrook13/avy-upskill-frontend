import React from 'react';
import { reformatDate } from '../utils/functions'

function CourseDetail({selected, showAllCourses}) {
  
  return (
    <div className="details-card stack-sections">
      <div className="spread-section">
        <div className="stack-sections left-align">
          <h4>{selected.class_type} in {selected.location}</h4> 
          <div className="info-section stack-sections left-align">
            <p>with {selected.provider}</p>
            <p>{reformatDate(selected.start_date)} to {reformatDate(selected.end_date)}</p>
          </div>
          <h4>{selected.cost}</h4> 
        </div>
        <div>
          <button className="page-number no-margin" onClick={()=>showAllCourses()}>x</button>
        </div>
      </div>
      <div className="spread-buttons">
        <a href={selected.details_url} target="_blank" rel="noreferrer">
          <button className="button no-side-margin">Register</button>
        </a>
        <a href={selected.aiare_url} target="_blank" rel="noreferrer">
          <button className="button no-side-margin" >{selected.class_type} Details</button>
        </a>
      </div>
      <div className="stack-sections left-align">
        <p>For more information:</p>
        <p>{selected.phone}</p>
        <a href={selected.provider_url}>{selected.provider_url}</a>
      </div>
    </div>
  );
}

export default CourseDetail;