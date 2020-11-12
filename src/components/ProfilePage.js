import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import {favURL, daysURL} from '../constants';
import {reformatDate, captureInput} from '../utils/functions';
import {postBackcountryDayToBackend, deleteJournalFromBackend} from '../utils/postToBackend';

function ProfilePage({user, userSavedAreas, setUserSavedAreas}) {

  const [location, setLocation] = useState("")
  const [journal, setJournal] = useState("")
  const [date, setDate] = useState("")
  const [backcountryDays, setDays] = useState([])
  const [showJournalDetails, setShowJournal] = useState([])

  useEffect(()=> {
    const loadProfile = () => {
      if (user) {
        setDays(user.backcountry_days)
        setUserSavedAreas(user.fav_areas)
      }
    }
    loadProfile()
  }, [user])

  useEffect(() => {
    showJournal(backcountryDays)
  }, [backcountryDays])


  function toggleJournalDetail(_, id){
    if(showJournalDetails.find(journalId => journalId === id)){
      const removeFromList = showJournalDetails.filter(journalId => journalId !== id)
      setShowJournal(removeFromList)
    } else {
      setShowJournal([...showJournalDetails, id])
    }
  }

  function removeJournalEntry(_, day) {
    deleteJournalFromBackend(day)
    const updatedJournals = backcountryDays.filter(existingDay => existingDay.id !== day.id)
    setDays(updatedJournals)
  }

  function showJournal(backcountryDays) {
    return backcountryDays.map(day => {
      return journalEntry(day)
    })
  }

  const journalEntry = (day) => {
    return ( 
      <div className="journal-entry center-stack">
        <div className="show-section">
          <h4 className="left-stack">{reformatDate(day.date)}</h4>
          <div className="center-stack">
            <p>{day.location.toUpperCase()}</p>
            { showJournalDetails.includes(day.id) ?
            <FontAwesomeIcon icon={faChevronUp} className="icon" size="1x" onClick={(_) => toggleJournalDetail(_, day.id)} /> :
            <FontAwesomeIcon icon={faChevronDown} className="icon" size="1x" onClick={(_) => toggleJournalDetail(_, day.id)} /> }
          </div>
          <div className="right-stack">
            <FontAwesomeIcon icon={faTimes} className="icon" size="1x" onClick={(_) => removeJournalEntry(_, day)}/>
          </div>
        </div>
        {showJournalDetails.includes(day.id) ?
        <p className="journal-text">{day.journal}</p>:
        null
        }
      </div>
    )
  }

  const handleSubmit = (e) => {
    const journalInput = { user:user.id, location, date, journal}
    e.preventDefault()
    const dayForm = document.querySelector('#day-form')
    dayForm.reset()
    postBackcountryDayToBackend(journalInput)
     .then(addJournalToDisplay(journalInput))
  }

  const addJournalToDisplay = (journalInput) => {
    const journalwithFakeID = {...journalInput, id:999}
    setDays([...backcountryDays, journalwithFakeID])
  }

  const dayCounter = () => {
    const numDays = backcountryDays.length
    return numDays
  }

  return (
    <div className="profile-page main-section">
      <section className="page-title profile-title">
        <h2>Your Next Adventure Awaits</h2>
      </section>
      <section className="profile-section">
        <section className="left-side">
          <div className="days-section">
            <div className="start">
              <h3>You've adventured</h3>
            </div>
            <span className="day-count">{dayCounter()}</span>
            <h3 className="end">days this season!</h3>
          </div>
          <section className="backcountry-form">
            <h4>Log Your Backcountry Days:</h4>
            <form className="stack-sections" id="day-form" onSubmit={(_) => handleSubmit(_)}>
              <label for="date">When</label>
              <input type="date" id="date" name="date" placeholder="2020-12-15" onChange={(_) => captureInput(_, setDate)} />
              <label for="location">Where</label>
              <input type="text" id="location" name="location" placeholder="ex: Red Mountain Pass" onChange={(_) => captureInput(_, setLocation)} />
              <label for="journal">Journal</label>
              <textarea rows="5" cols="30" id="journal" name="journal" className="text-input" placeholder="Who were you with? What did you see / do?" onChange={(_) => captureInput(_, setJournal)}/>
              <button type="submit" className="button">Submit</button>
            </form>
          </section>
        </section>
        <section className="right-side">
          <div className="journal-section">
            <h4>Your Past Days</h4>
            {showJournal(backcountryDays)}
          </div>
        </section>
      </section>
    </div>
  );
}

export default ProfilePage;