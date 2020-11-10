import {signupURL, loginURL} from '../constants'
import {parseJSON, setToken, handleError} from './functions'
import { getProfile } from './getProfile'
import { loginUser } from './loginUser'

export function createUser(e, setUser, userInfo, setIsOpen){ 
  e.preventDefault()
  fetch(signupURL, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userInfo)
  })
    .then(parseJSON)
    .then(result => {
      if (result.id) {
        getNewUserToken(userInfo, setIsOpen)
        getProfile(setUser)
      } else {
        handleError("Please try again")
      }
    })
}  

function getNewUserToken (userInfo, setIsOpen){
  fetch(loginURL, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userInfo)
  })
    .then(parseJSON)
    .then(result => {
      setToken(result.token)
      setIsOpen(false)
    })
}  
