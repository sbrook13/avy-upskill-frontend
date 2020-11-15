import {profileURL} from '../constants'
import {parseJSON, handleError} from './functions'

export function getProfile(setUser){ 
  fetch(profileURL, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    }
  })
    .then(parseJSON)
    .then(result => {
      if(result.id){
        setUser(result)
      } else {
        throw new Error
      }      
    })
    .catch(handleError(Error))
}  