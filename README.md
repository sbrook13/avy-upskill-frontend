# AvyUpskill

An React website application to integrate backcountry skiing resources and information in Colorado.

# Table Of Contents 
- [Description](https://github.com/sbrook13/avy-upskill-frontend#description)
- [How It Works (gifs)](https://github.com/sbrook13/avy-upskill-frontend#how-it-works)
- [Example Code](https://github.com/sbrook13/avy-upskill-frontend#example-code)
- [Technology Used](https://github.com/sbrook13/avy-upskill-frontend#technology-used)
- [Setting up for the Application](https://github.com/sbrook13/avy-upskill-frontend#setting-up-for-the-application)
- [Main Features](https://github.com/sbrook13/avy-upskill-frontend#main-features)
- [Features in Progress](https://github.com/sbrook13/avy-upskill-frontend#features-in-progress)
- [Contact Information](https://github.com/sbrook13/avy-upskill-frontend#contact-information)
- [Link to Backend Repo](https://github.com/sbrook13/avy-upskill-frontend#link-to-backend-repo)

## Description

AvyUpskill is the one-stop-shop for backcountry skiing information in Colorado, in order to educate and empower novice backcountry skiers who don't know where to begin. Guests can get a quick weather report, find upcoming courses to increase their knowledge, beacon parks to practice their skills, low angle zones to get out relatively safely, and link to the CAIC avalanche forecast. Users can login to add comments and provide ratings on those backcountry-zones, as well as log their backcountry days with a journal entry.

## Main Features

- User can login or signup with django-restframework-jwt authentication.
- User can record their backcountry days with a journal entry.
- User can add comments / ratings for backcountry ski zones.
- Guests and Users can see upcoming courses, beacon parks, and backcountry zones in Colorado.

## How It Works

### Landing Page


![Landing Page](https://media0.giphy.com/media/O0njrtdNFN5rjdwJ2E/giphy.gif)


### Login or Signup


![Login or Signup](https://media4.giphy.com/media/N9hyNTCfXPxuet8m83/giphy.gif)


### Learn about AIARE courses


![Courses](https://media4.giphy.com/media/sW0fuZX1RcZ0OFakYB/giphy.gif)


### Filter AIARE courses by type and/or provider


![Filter Courses](https://media2.giphy.com/media/5IZmzBGvzwudp3xCdT/giphy.gif)


### See Beacon Parks on Map


![Beacon Parks](https://media1.giphy.com/media/IoHkyHBQ06Kpq98B2P/giphy.gif)


### See Backcountry Ski Areas on Map or List


![Backcountry Zones](https://media0.giphy.com/media/xzb1hQZ7S1Qh2ASUQW/giphy.gif)


### Add a comment on an existing area


![Backcountry-Zones](https://media0.giphy.com/media/ZhdsI01dhcEP3VLFnA/giphy.gif)


### Add another area to the list!


![Add Area](https://media1.giphy.com/media/sXuEFuMVfaWlUAP6ci/giphy.gif)


## Example Code 

Set Marker Format for the Maps:
```
export function setMarkerFormat(allPoints, setFunction) {
  let cumulativeArray =[]
  allPoints.map(point => {
    let marker = {
      markerOffset: -30,
      name: `${point.name}`,
      coordinates: [parseFloat(point.lon), parseFloat(point.lat)],
      fullInfo: point
    }
    cumulativeArray = [...cumulativeArray, marker]
  })
  setFunction(cumulativeArray)
}
```

Filtering Course Options
```
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
```

Calculate Ratings
```
function calculateRating() {
    if(selected.ratings[0]){
      const ratingsOnly = selected.ratings.map(ratingObject => { 
        return parseInt(ratingObject.rating)
      })
      const total = ratingsOnly.reduce((a,b) => {
        return a+b
      })
      const average = total/ratingsOnly.length
      return <StarRating average={average} />
    } else {
      return <p>No Ratings Yet</p>
    }
  }
```

## Setting up for the application

To start the server run

``` 
    npm-start 
```

or visit the live website at http://avyupskill.firebaseapp.com

## Technology Used

- React
- React-Simple-Maps
- Javascript
- HTML
- CSS

## Features in Progress

- Connect with other users to share information, plan ski days, and learn together. 
- Integrate Avalanche Forecast information directly on the page. 

## Link to Live Site

https://avyupskill.firebaseapp.com/

## Link to Backend Repo

https://github.com/sbrook13/avy_upskill_backend

## Contact Information

Created by [Shelley Brook](https://www.linkedin.com/in/sbrook13/)
