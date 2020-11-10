import React, {useState} from 'react';
import {handleChange} from '../utils/functions'
import {loginUser} from '../utils/loginUser'
import {createUser} from '../utils/createUser'

function LoginOrSignupForm({setUser, type, setIsOpen}) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(event){
    const userInfo = { username, password }
    if (type == "Login"){
      loginUser(event, setUser, userInfo, setIsOpen)
    } else {
      createUser(event, setUser, userInfo, setIsOpen)
    }
  }

  return (
    <div className="login-form">
      <h2>{type}</h2>
      <form className="stack-sections" onSubmit={(_) => handleSubmit(_)}>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" onChange={(_) => handleChange(_, setUsername)}/>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" onChange={(_) => handleChange(_, setPassword)}/>
        <input type="submit" className="button"/>
      </form>
      <p className="login-error"></p>
    </div>
  );
}

export default LoginOrSignupForm;