import { commentsURL, ratingsURL, areasURL, daysURL } from '../constants'
import {parseJSON} from './functions'

export function postToCommentsBackend (userInput) {
  fetch(commentsURL, {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    },
      body: JSON.stringify(userInput)
    })
      .then(parseJSON)
      .then(result => console.log(result))
}

export function postToRatingsBackend (userInput) {
  return(
    fetch(ratingsURL, {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      },
        body: JSON.stringify(userInput)
      })
        .then(parseJSON)
        .then(result => console.log(result))
  )
}

export function postAreaToBackend (userInput) {
  fetch(areasURL, {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    },
      body: JSON.stringify(userInput)
    })
}

export function postFavAreaToBackend (userInput) {
  fetch(areasURL, {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    },
      body: JSON.stringify(userInput)
    })
}

export function postBackcountryDayToBackend (userInput) {
  return(
    fetch(daysURL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(userInput)
    })
      .then(parseJSON)
      .then(result => console.log("posted", result))
  )
}
export function deleteJournalFromBackend(day){
    return (
      fetch(`${daysURL}${day.id}/`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
    )
    .then(result => console.log(result))
}
