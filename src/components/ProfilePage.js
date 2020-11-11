import React, {useState, useEffect} from 'react';
import {favURL, daysURL} from '../constants';
import {reformatDate, captureInput} from '../utils/functions';

function ProfilePage({user, userSavedAreas, setUserSavedAreas}) {

  const [location, setLocation] = useState("")
  const [journal, setJournal] = useState("")
  const [date, setDate] = useState("")
  const [backcountryDays, setDays] = useState([])

  useEffect(()=> {
    const loadProfile = () => {
      if (user) {
        setDays(user.backcountry_days)
        setUserSavedAreas(user.fav_areas)
      }
    }
    loadProfile()
  }, [user, backcountryDays])

  const showJournal = () => {
    return backcountryDays.map(day => {
      return (
        <div className="journal-entry">
          <h4 className="class-title">{reformatDate(day.date)}</h4>
          <p>{day.location}</p>
          <p>{day.journal}</p>
        </div>
      )
    })
  }

  const handleSubmit = (e) => {
    let user = user.id
    const journalInput = { user, location, date, journal}
    e.preventDefault()
    fetch(daysURL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(journalInput)
    })
    addJournalToDisplay(journalInput)
  }

  const addJournalToDisplay = (journalInput) => {
    setDays(...backcountryDays, journalInput)
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
            <h3>Log Your Backcountry Days:</h3>
            <form className="stack-sections" onSubmit={(_) => handleSubmit(_)}>
              <label for="date">When</label>
              <input type="date" id="date" name="date" placeholder="2020-12-15" onChange={(_) => captureInput(_, setDate)} />
              <label for="location">Where</label>
              <input type="text" id="location" name="location" placeholder="ex: Red Mountain Pass" onChange={(_) => captureInput(_, setLocation)} />
              <label for="journal">Journal</label>
              <textarea rows="5" cols="30" id="journal" name="journal" className="text-input" placeholder="What did you see? What did you do?" onChange={(_) => captureInput(_, setJournal)}/>
              <button type="submit" className="button">Submit</button>
            </form>
          </section>
        </section>
        <div className="stack-sections right-side">
          <div className="journal-section stack-sections">
            <h4>Your Past Days</h4>
            {showJournal()}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;