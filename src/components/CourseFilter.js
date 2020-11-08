import React, {useState} from 'react';
import { handleSetStateOnClick } from '../utils/functions';

function CourseFilter(props) {
  const {
    courses, 
    providers, 
    displayCourses, 
    filteredList, 
    setFilteredList, 
    showAllCourses
  } = props
  
  const [page, setPage] = useState(1)
  const [selectedCourseType, setSelectedCourseType] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)

  const filterChoice = (event, setFunction) => {
    const input = event.target.value
    if (input === "All") {
      setFunction(null)
    } else {
      setFunction(input)
    }
    setTimeout(() => {filterCourses()},500)
  }

  const filterCourses = () => {
    console.log("course type", selectedCourseType)
    console.log("before filter", filteredList)
    if (selectedCourseType === null && selectedProvider === null){
      showAllCourses()
    } else {
      const filteredCourses = filteredList.filter(course => course.class_type === selectedCourseType)
      setFilteredList(filteredCourses)
      console.log("after filter", filteredCourses)
    }
  }


  const loadSearchByCourse = () => {
    return (
      <form className="search-bar">
        <label>Filter By Course Type</label>
        <select onChange={(_) => filterChoice(_, setSelectedCourseType)}>
          <option value="All" default>All</option>
          <option value="AIARE 1 ">AIARE 1</option>
          <option value="AIARE 2 ">AIARE 2</option>
          <option value="Avalanche Rescue">Avalanche Rescue</option>
        </select>
      </form>
    )
  }

  const loadSearchByProviders = () => {
    return (
      <form className="search-bar">
        <label>Filter By Course Provider</label>
        <select onChange={(_) => filterChoice(_, setSelectedProvider)}>
          {providers.map(provider => {
              return (
                <option value={provider}>{provider}</option>
              )
            }
          )}
        </select>
      </form>
    )
  }

  return (
    <div>
      {loadSearchByCourse()}
      {loadSearchByProviders()}
    </div>
  );
}

export default CourseFilter;