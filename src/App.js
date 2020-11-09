import React, {useState, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginOrSignupForm from './components/LoginOrSignupForm';
import ProfilePage from './components/ProfilePage';
import LandingPage from './components/LandingPage';
import BeaconParksPage from './components/BeaconParksPage';
import CoursesPage from './components/CoursesPage';
import SkiAreaPage from './components/SkiAreaPage';
import ScrollToTop from './utils/ScrollToTop';
import ReactTooltip from 'react-tooltip';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function App() {

  const [user, setUser] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [LoginOrOut, setOption] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // App.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div className="App">
      <Header user={user} setUser={setUser} setIsOpen={setIsOpen} setOption={setOption}  />
      <main>
        <Fragment>
          <ScrollToTop/>
          <Switch>
            <Route path="/profile" render={ () => <ProfilePage user={user} /> } />
            <Route path="/courses" render={ () => <CoursesPage /> } />
            <Route path="/beacon-parks" render={ () => <BeaconParksPage user={user} /> } />
            <Route path="/backcountry-zones" render={ () => <SkiAreaPage user={user} /> } />
            <Route path="/" render={ () => <LandingPage /> } />
          </Switch>
        </Fragment>
      </main>
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <LoginOrSignupForm user={user} setUser={setUser} type={LoginOrOut} />
          <button onClick={closeModal}>close</button>
        </Modal>
      <Footer />
    </div>
  );
}

export default App;
