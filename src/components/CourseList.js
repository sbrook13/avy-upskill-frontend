import React, {useState, useEffect} from 'react';
import { handleSetStateOnClick } from '../utils/functions';
import CourseFilter from './CourseFilter'
import CourseDetails from './CourseDetails'

function CoursesList(props) {

  const {
    courses,  
    providers, 
    selected, 
    setSelected, 
    filteredList,
    coursesToDisplay,
    setCoursesToDisplay,
    setFilteredList,
    showAllCourses,
  } = props
  
  const [page, setPage] = useState("")

  useEffect(() => {
    setCoursesToDisplay(filteredList.slice(0,10))
    setPage(1)
  }, [])

  const displayCourses = () => {
    return coursesToDisplay.map(course => {
      return (
        <div className="list-item" 
          onClick={(_) => handleSetStateOnClick(_, setSelected, course)}
          >
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

  const displayButtons = () => {
    let totalPages = Math.ceil(filteredList.length/10)
    let i=1
    const pageNumbers = []
    while (i <= totalPages) {
      let pageCount = []
      let last = i*10 
      let first = last - 9
      pageCount = [i, first, last]
      pageNumbers[i-1]=pageCount
      i++
    }
    return pageNumbers.map(num => {
      return (
        <button 
          className="page-number"
          color={page === num[0] ? "#FF5533" : "#1a354b"}
          onClick={() => showPage(num[1], num[2])}
          >{num[0]}
        </button>
      )
    })
  }

  const showPage = (x, y) => {
    setCoursesToDisplay(filteredList.slice(x,y))
  }

  return (
    <>
      { selected ? 
        <CourseDetails
          selected={selected} 
          showAllCourses={showAllCourses}
        /> : 
        <>
          <h3>Upcoming Avalanche Courses in Colorado</h3>
          <CourseFilter 
            courses={courses} 
            selected={selected} 
            setSelected={setSelected} 
            providers={providers} 
            displayCourses={displayCourses}
            setFilteredList={setFilteredList}
            filteredList={filteredList} 
            showAllCourses={showAllCourses}
          /> 
          {displayCourses()}
          <div>
            {displayButtons()}
          </div>
        </>
      }
    </>
  );
}

export default CoursesList;