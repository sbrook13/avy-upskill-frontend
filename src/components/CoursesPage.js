import React, {useState} from 'react';
import CourseList from './CourseList';

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

  const courseTypes = [
    {type: "Avalanche Rescue",
    duration: "1-day / 8-hour", 
    description: "A one-day stand alone course that is intended to be retaken on a regular basis by new and experienced backcountry travellers in order to keep abreast of best practices in rescue techniques and gear. New participants will learn the basics of companion rescue, while returning participants will expand their skill set with advanced topics and realistic scenario practice to help improve their skills.",
    prereqs: "Students must be able to travel in avalanche terrain and bring appropriate equipment for traveling on snow to class. There are no other prerequisites."
    },
    {type: "AIARE 1",
    duration: "3-day / 24-hour", 
    description: "An introduction to avalanche hazard management, students will develop a good grounding in how to prepare for and carry out a backcountry trip, to understand basic decision making while in the field, and to learn rescue techniques required to find and dig up a buried perso. The AIARE 1 is for ANYONE, regardless of method of travel, who wants to recreate in or near avalanche terrain.",
    prereqs: "Participants may have attended some awareness classes or workshops or completed the Avalanche Rescue course, but none are a prerequisite for this course."
    },
    {type: "AIARE 2",
    duration: "3-day / 24-hour", 
    description: "An opportunity to advance backcountry decision making skills in more complicated situations such as being a leader within a small travel group, traveling in more complicated terrain, and/or developing a travel plan where resources are scarce. The AIARE 2 builds on the introductory avalanche hazard management model introduced in the AIARE 1 and adds to it the evaluation of critical hazard assessment factors such as weather, snowpack and avalanche processes.",
    prereqs: "Students must have completed an AIARE level 1 course, one-day Avalanche Rescue Course and one year of practical experience after the course."
    },
  ]

  const showCourseTypes = (courseTypes) => {
    return courseTypes.map(course => {
      return (
        <div className="course-list">
          <h4>{course.type}</h4>
          <p>{course.duration}</p>
          <p>{course.description}</p>
          <p>{course.prereqs}</p>
      </div>
      )
    })
  }

  return (
    <div className="CoursesPage main-section">
      <section className="page-title">
      <img src="https://payettepowderguides.com/assets/images/page/aiare-logo.png" alt="Avalanche Research + Education logo"/>
      <h2>Prepare Yourself for Backcountry Travel</h2>
        <p></p>
        <div className="course-type">
          {showCourseTypes(courseTypes)}
        </div>
      </section>
      <CourseList />
    </div>
  );
}

export default CoursesPage;