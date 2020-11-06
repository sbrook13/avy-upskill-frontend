import React, {useState} from 'react';
import {handleChange, handleError, setToken, parseJSON} from '../utils/functions'
import {loginURL} from '../constants'


function LoginForm({user, setUser}) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function loginUser(e){ 
    e.preventDefault()
    const userLogin = { username, password }
    fetch(loginURL, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userLogin)
    })
      .then(parseJSON)
      .then(result => {
        if(result.error){
            throw new Error(result.error)
        }
        console.log("setting token...")
        setToken(result.token)
        console.log(user)
        // showUserData()
      })
      .catch(handleError)
  }  

  return (
    <div className="login-form main-section">
      <form className="stack-sections" onSubmit={loginUser}>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" onChange={(_) => handleChange(_, setUsername)}/>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" onChange={(_) => handleChange(_, setPassword)}/>
        <input type="submit" className="button"/>
      </form>
    </div>
  );
}

export default LoginForm;