import {signupURL, loginURL} from '../constants'
import {parseJSON, setToken, handleError} from './functions'
import { getProfile } from './getProfile'
import { loginUser } from './loginUser'

export function createUser(e, setUser, userInfo, setIsOpen, handleError){ 
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
          .then(() => getProfile(setUser))
      } else {
        handleError("Username already exists.")
      }
    })
}  

function getNewUserToken (userInfo, setIsOpen){
  return (
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
  )
  
}  
