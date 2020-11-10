import React, {useState, useEffect, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ProfilePage from './components/ProfilePage';
import LandingPage from './components/LandingPage';
import BeaconParksPage from './components/BeaconParksPage';
import CoursesPage from './components/CoursesPage';
import SkiAreaPage from './components/SkiAreaPage';
import ScrollToTop from './utils/ScrollToTop';


function App() {

  const [user, setUser] = useState(false)
  const [loginInOrOut, setLoginOrOut] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [userBackcountryDays, setUserBackcountryDays] = useState([])
  const [userSavedAreas, setUserSavedAreas] = useState([])

 
  return (
    <div className="App">
      <Header user={user} setUser={setUser} setIsOpen={setIsOpen} type={setLoginOrOut} />
      <main>
        <Fragment>
          <ScrollToTop/>
          <Switch>
            <Route path="/profile" render={ () => <ProfilePage user={user} userBackcountryDays={userBackcountryDays} setUserBackcountryDays={setUserBackcountryDays} /> } />
            <Route path="/courses" render={ () => <CoursesPage /> } />
            <Route path="/beacon-parks" render={ () => <BeaconParksPage user={user} /> } />
            <Route path="/backcountry-zones" render={ () => <SkiAreaPage user={user} setUserSavedAreas={setUserSavedAreas} /> } />
            <Route path="/" render={ () => <LandingPage /> } />
          </Switch>
        </Fragment>
      </main>      
      <Footer />
      { isOpen ? <Modal 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        user={user} 
        setUser={setUser} 
        type={loginInOrOut} 
      /> : null }
    </div>
  );
}

export default App;
