import {profileURL} from '../constants'
import {parseJSON, setToken, handleError} from './functions'

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
      console.log(result)
      if(result.id){
        setUser(result)
      } else {
        console.log("else", result)
      }      
    })
    .catch(error => console.log("ERROR!", error))
}  