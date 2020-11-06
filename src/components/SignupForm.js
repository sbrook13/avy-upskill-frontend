import React, {useState} from 'react';
import {handleChange, handleError, setToken, parseJSON} from '../utils/functions'
import {signupURL} from '../constants'

function SignupForm({user, setUser}) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function createUser(e){ 
    e.preventDefault()
    const userSignup = { "username":username, "password":password }
    fetch(signupURL, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userSignup)
    })
      .then(parseJSON)
      .then(result => {
        if(result.status == 201){
          console.log("setting token...")
          console.log(result)
          // setToken(newUser.token)
          // setUser(newUser)
          // console.log(user)
          // showUserData()
        } else {
          throw new Error("SOMETHING IS WRONG!")
        }
      })
      .catch(handleError)
  }  

  return (
    <div className="login-form main-section">
      <form className="stack-sections" onSubmit={createUser}>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" onChange={(_) => handleChange(_, setUsername)}/>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" onChange={(_) => handleChange(_, setPassword)}/>
        <input className="button" type="submit" />
      </form>
    </div>
  );
}

export default SignupForm;