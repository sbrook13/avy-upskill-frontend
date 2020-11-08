import {signupURL} from '../constants'
import {parseJSON, setToken, handleError} from './functions'
import { loginUser } from './loginUser'

export function createUser(e, setUser, userInfo, history){ 
  e.preventDefault()
  fetch(signupURL, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userInfo)
  })
    .then(parseJSON)
    .then(result => {
      if(result.status == 201){
        setToken(result.token)
        setUser(result.user)
        history.push('/')
      } else {
        if (result.username){
          throw new Error(result.username[0])
        }
        if (result.password){
          throw new Error(result.password[0])
        }
      }
    })
    .catch(handleError)
}  
