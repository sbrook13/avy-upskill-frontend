import React, {useState, useEffect} from 'react';

function CourseFilter(props) {
  const { courses, providers, setFilteredList } = props
  
  const [selectedCourseType, setSelectedCourseType] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)

  useEffect(() => {
    filterCourses()
  }, [selectedCourseType, selectedProvider])

  const filterChoice = (event, setFunction) => {
    const input = event.target.value
    if (input === "All") {
      setFunction(null)
    } else {
      setFunction(input)
    }
  }

  const filterCourses = () => {
    const messageLine = document.querySelector('.bad-search')
    messageLine.innerHTML = ""
    if (selectedCourseType === null && selectedProvider === null){
      setFilteredList(courses)
    } else {
      if (selectedProvider === null) {
        const filteredCourses = courses.filter(course => course.class_type === selectedCourseType)
        setFilteredList(filteredCourses)
      } else if (selectedCourseType === null) {
        const filteredCourses = courses.filter(course => course.provider === selectedProvider)
        setFilteredList(filteredCourses)
      } else {
        const filteredByCourseType = courses.filter(course => course.class_type === selectedCourseType)
        const secondFilterByProvider = filteredByCourseType.filter(course => course.provider === selectedProvider)
        if (secondFilterByProvider.length === 0){
          const messageLine = document.querySelector('.bad-search')
          messageLine.innerHTML = "Sorry, that combination does not exist. Try again!"
        } else {
          setFilteredList(secondFilterByProvider)
        }
      }  
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
    <>
      <div>
        {loadSearchByCourse()}
        {loadSearchByProviders()}
      </div>
      <p className="bad-search"></p>
    </>
  );
}

export default CourseFilter;