import {loginURL} from '../constants'
import {parseJSON, setToken, handleError} from './functions'

export function loginUser(e, setUser, userInfo, history){ 
  console.log(userInfo)
  e.preventDefault()
  fetch(loginURL, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userInfo)
  })
    .then(parseJSON)
    .then(result => {
      console.log("result for login", result)
      if(result.status == 200){
        setToken(result.token)
        setUser(result.username)
      } else {
        console.log(result[0])
      }      
      // showUserData()
    })
    .catch(handleError)
}  