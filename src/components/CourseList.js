import React from 'react';
import { handleSetStateOnClick, reformatDate } from '../utils/functions';
import CourseFilter from './CourseFilter'
import CourseDetails from './CourseDetails'

class CoursesList extends React.Component {

  state = {
    page: 1,
  }

  componentDidUpdate(props){
    if (this.props.filteredList !== props.filteredList){
      this.props.setCoursesToDisplay(this.props.filteredList.slice(0,15))
    }
  }

  displayCourses = () => {
    return this.props.coursesToDisplay.map(course => {
      return (
        <div className="list-item" 
          onClick={(_) => handleSetStateOnClick(_, this.props.setSelected, course)}
          >
          <h4 className="class-title">{course.class_type}</h4>
          <section className="course-details">
            <div className="stack-sections">
              <p>{course.provider}</p>
              <p>{reformatDate(course.start_date)} to {reformatDate(course.end_date)}</p>
            </div>
            <p>{course.location}</p>
            <h4>{course.cost}</h4>
          </section>
        </div>
      )
    })
  }

  displayButtons = () => {
    let totalPages = Math.ceil(this.props.filteredList.length/15)
    let i=1
    const pageNumbers = []
    while (i <= totalPages) {
      let pageCount = []
      let last = i*15 
      let first = last - 15
      pageCount = [i, first, last]
      pageNumbers[i-1]=pageCount
      i++
    }
    return pageNumbers.map(num => {
      return (
        <button 
          className="page-number"
          id={num}
          style={{
            backgroundColor: this.state.page === num[0] ? "#FF5533" : "#1a354b",
          }}
          onClick={() => this.showPage(num[0], num[1], num[2])}
          >{num[0]}
        </button>
      )
    })
  }

  showPage = (pageNum, x, y) => {
    this.setState({page:pageNum})
    this.props.setCoursesToDisplay(this.props.filteredList.slice(x,y))
  }

  render () {
    return (
      <>
        { this.props.selected ? 
          <CourseDetails
            selected={this.props.selected} 
            showAllCourses={this.props.showAllCourses}
          /> : 
          <>
            <h3>Upcoming Avalanche Courses in Colorado</h3>
            <CourseFilter 
              courses={this.props.courses} 
              providers={this.props.providers} 
              setFilteredList={this.props.setFilteredList}
            /> 
            <div>
              {this.displayButtons()}
            </div>
            {this.displayCourses()}
          </>
        }
      </>
    );
  }
}

export default CoursesList;