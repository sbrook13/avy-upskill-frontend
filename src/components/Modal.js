import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import LoginOrSignupForm from './LoginOrSignupForm';


export default function Modal ({ setIsOpen, setUser, type }) {
 
  return (
    <>
    <div id="modal" className="overlay">
      <div className="modalBox">
        <button className="dismiss page-number" onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faTimes} 
            size="1x" 
          />
        </button>
        <LoginOrSignupForm setUser={setUser} type={type} setIsOpen={setIsOpen} /> 
      </div>
    </div>
    </>
  )

}