import React, {useState, useEffect} from 'react';
import CourseList from './CourseList';
import {setMarkersFromBackend, handleSetStateOnClick, parseJSON} from '../utils/functions'
import {coursesURL} from '../constants'
import CourseDetail from './CourseDetails';

function CoursesPage() {
  
  const [courses, setCourses] = useState([])
  const [providers, setProviders] = useState([])
  const [selected, setSelected] = useState(null)
  const [filteredList, setFilteredList] = useState([])
  const [coursesToDisplay, setCoursesToDisplay] = useState([])

  useEffect(() => {
    const fetchAreasData = () => {
      fetch(`${coursesURL}`)
        .then(parseJSON)
        .then(data => {
          upcomingCourses(data)
          findProviders(data)
        })
        .catch() 
    }
    fetchAreasData()
  }, [])

  function upcomingCourses (allCourses) {
    let today = new Date()
    const upcoming = allCourses.filter(course => {
      const startDate = new Date (course.start_date)
      if (startDate >= today){
        return course
      }
    })
    setCourses(upcoming)
    setCoursesToDisplay(upcoming.slice(0,15))
    setFilteredList(upcoming)
  }

  const showAllCourses = () => {
    setFilteredList(courses)
    setSelected(null)
  }

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

  let allProviders = ["All"]
  const findProviders = (courses) => {
    return courses.map(course => {
      if (!allProviders.find(provider => provider === course.provider)) {
        allProviders = [...allProviders, course.provider]
        setProviders(allProviders.sort())
      }
    })
  }

  return (
    <div className="CoursesPage main-section">
      <section className="page-title">
      <a href="https://avtraining.org/" target="_blank">
        <img src="https://payettepowderguides.com/assets/images/page/aiare-logo.png" alt="Avalanche Research + Education logo"/>
      </a>
      <h2>Prepare Yourself for Backcountry Travel</h2>
        <p></p>
        <div className="course-type">
          {showCourseTypes(courseTypes)}
        </div>
      </section>
      <section className="split-section">
        <div className="image-stack">
          <img src="https://i.imgur.com/7G7squA.jpg" alt="compression test"/>
          <img src="https://i.imgur.com/24LmdkV.jpg" alt="three students in the backcountry assessing the terrain"/>
        </div>
        <div className="course-list">
          { courses ? 
            <CourseList 
              courses={courses}  
              providers={providers} 
              selected={selected} 
              setSelected={setSelected} 
              filteredList={filteredList}
              setFilteredList={setFilteredList}
              coursesToDisplay={coursesToDisplay}
              setCoursesToDisplay={setCoursesToDisplay}
              showAllCourses={showAllCourses}
            /> 
            : 
            null
          }
        </div>
      </section>
    </div>
  );
}

export default CoursesPage;