import React, {useState} from 'react';
import {handleChange} from '../utils/functions'
import {loginUser} from '../utils/loginUser'
import {createUser} from '../utils/createUser'

function LoginOrSignupForm({user, setUser, type, history}) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(event){
    const userInfo = { username, password }
    if (type == "login"){
      loginUser(event, setUser, userInfo, history)
    } else {
      createUser(event, setUser, userInfo, history)
    }
  }

  return (
    <div className="login-form main-section">
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