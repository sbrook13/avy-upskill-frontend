import React, {useState} from 'react';

function CoursesPage() {
  const [courses, setCourses] = useState([])

  // useEffect(() => {
  //   const fetchCourseData = async () => {
  //     try {
  //       const response = await fetch(`${geocodeURL}/json?address=${convertedAddress}&${geocodeApiKey}`);
  //       const data = await response.json();
  //       console.log(data)
  //     } catch(err) {
  //       //error handling
  //     }
  //   }
  //   fetchCourseData()
  // }, [])

  // const displayCourses = () => {
  //   console.log('courses')
  // }
  const displayCourses = (courses) => {
    return courses.map(course => {
      console.log(course)
      return (
        <div className="course-item">
          <h4 className="class-title">{course.class_type}</h4>
          <section>
            <p>{course.provider}</p>
            <p>{course.location}</p>
            <p>{course.start_date} - {course.end_date}</p>
          </section>
        </div>
      )
    })
  }

  const courseSeeds = [
    {provider: "Colorado Mountain School", class_type: "AIARE 1", location: "Estes Park, CO", start_date: "2020-11-20", end_date: "2020-11-22"},
    {provider: "Friends of Berthoud Pass", class_type: "Avalanche Rescue", location: "Berthoud Pass, CO", start_date: "2020-11-07", end_date: "2020-11-07"},
  ]

  return (
    <div className="CoursesPage main-section">
      <section className="page-title">
        <h3>Prepare Yourself for Backcountry Travel</h3>
        <p></p>
        <div className="course-type">
          <div className="course-list">
            <h4>Avalanche Rescue</h4>
            <p>1-day / 8-hour</p>
            <p>A one-day stand alone course that is intended to be retaken on a regular basis by new and experienced backcountry travellers in order to keep abreast of best practices in rescue techniques and gear. New participants will learn the basics of companion rescue, while returning participants will expand their skill set with advanced topics and realistic scenario practice to help improve their skills.</p>
            <p>Students must be able to travel in avalanche terrain and bring appropriate equipment for traveling on snow to class. There are no other prerequisites.</p>
          </div>
          <div className="course-list">
            <h4>AIARE 1</h4>
            <p>3-day / 24-hour</p>
            <p>An introduction to avalanche hazard management, students will develop a good grounding in how to prepare for and carry out a backcountry trip, to understand basic decision making while in the field, and to learn rescue techniques required to find and dig up a buried perso. The AIARE 1 is for ANYONE, regardless of method of travel, who wants to recreate in or near avalanche terrain.</p>
            <p> Participants may have attended some awareness classes or workshops or completed the Avalanche Rescue course, but none are a prerequisite for this course.</p>
          </div> 
          <div className="course-list">
            <h4>AIARE 2</h4>
            <p>3-day / 24-hour</p>
            <p>An opportunity to advance backcountry decision making skills in more complicated situations such as being a leader within a small travel group, traveling in more complicated terrain, and/or developing a travel plan where resources are scarce. The AIARE 2 builds on the introductory avalanche hazard management model introduced in the AIARE 1 and adds to it the evaluation of critical hazard assessment factors such as weather, snowpack and avalanche processes.</p>
            <p>Students must have completed an AIARE level 1 course, one-day Avalanche Rescue Course and one year of practical experience after the course.</p>
          </div>
        </div>
      </section>
      <section className="course-list">
        <h3>Upcoming Avalanche Courses in Colorado</h3>
        {displayCourses(courseSeeds)}
      </section>
    </div>
  );
}

export default CoursesPage;