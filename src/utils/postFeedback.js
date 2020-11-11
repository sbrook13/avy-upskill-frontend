import { commentsURL, ratingsURL, areasURL } from '../constants'
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
      .then(parseJSON)
      .then(result => console.log(result))
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
      .then(parseJSON)
      .then(result => console.log(result))
}


