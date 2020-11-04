import React, {useState} from 'react';

function CoursesList() {

  const courseSeeds = [
    {provider: "Colorado Mountain School", class_type: "AIARE 1", location: "Estes Park, CO", start_date: "2020-11-20", end_date: "2020-11-22"},
    {provider: "Friends of Berthoud Pass", class_type: "Avalanche Rescue", location: "Berthoud Pass, CO", start_date: "2020-11-07", end_date: "2020-11-07"},
  ]

  const providerSeeds = [
    "All",
    "Colorado Mountain School", 
    "Friends of Berthoud Pass", 
    "Backcountry Babes", 
    "Apex", 
    "Irwin Guides",
  ]
  
  const filterByCourse = () => {
    return (
      <form className="search-bar">
        <label>Filter By Course Type</label>
        <select>
          <option value="" default>All</option>
          <option value="1">AIARE 1</option>
          <option value="2">AIARE 2</option>
          <option value="3">Avalanche Rescue</option>
        </select>
      </form>
    )
  }

  const filterByProviders = (providerSeeds) => {
    return (
      <form className="search-bar">
        <label>Filter By Course Provider</label>
        <select>
          {providerSeeds.map(provider => {
            return (
              <option value={provider}>{provider}</option>
            )
          })}
        </select>
      </form>
    )
  }

  const filterByMonth = () => {
    return (
      <form className="search-bar">
        <label>Filter By Month</label>
        <select>
          <option value="" default>All</option>
          <option value="11">November</option>
          <option value="12">December</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
        </select>
      </form>
    )
  }

  const displayCourses = (courses) => {
    return courses.map(course => {
      console.log(course)
      return (
        <div className="course-item">
          <h4 className="class-title">{course.class_type}</h4>
          <section className="course-details">
            <p>{course.provider}</p>
            <p>{course.location}</p>
            <p>{course.start_date} - {course.end_date}</p>
          </section>
        </div>
      )
    })
  }

  return (
    <section className="split-section">
      <img src="https://i.imgur.com/7G7squA.jpg" alt=""/>
      <div className="course-list">
        <h3>Upcoming Avalanche Courses in Colorado</h3>
        <div>
          {filterByCourse()}
          {filterByProviders(providerSeeds)}
          {filterByMonth()}
        </div>
        {displayCourses(courseSeeds)}
      </div>
    </section>
  );
}

export default CoursesList;