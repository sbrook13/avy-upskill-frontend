import {loginURL} from '../constants'
import {parseJSON, setToken, handleError} from './functions'
import {getProfile} from './getProfile'

export function loginUser(e, setUser, userInfo, setIsOpen){ 
  e.preventDefault()
  fetch(loginURL, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userInfo)
  })
    .then(parseJSON)
    .then(result => {
      if(!result.token){
        handleError("Incorrect Username or Password")
      } else {
        setToken(result.token)
        getProfile(setUser)
        setIsOpen(false)
      }
    })    
}  