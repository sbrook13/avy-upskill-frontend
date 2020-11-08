import React from 'react';

function SkiDetails({selectedArea, setSelectedArea}) {

  const removeSelection = () => {
    setSelectedArea(null)
  }

  return (
    <section className="flex-container-center">
      <h2>Click on a Marker to Learn More!</h2>
      <p>nearest city</p>
      <p>description...</p>
    </section>
  );
}

export default SkiDetails;