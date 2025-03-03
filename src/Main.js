import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MeetTheTeam from './pages/MeetTheTeam';
import ContactUs from './pages/ContactUs'
import Academics from './pages/Academics'
import Resources from './pages/Resources'
import EventsAndMentorship from './pages/EventsAndMentorship';
import NavbarDesktop from './components/NavbarDesktop';
import NavbarMobile from './components/NavbarMobile';
import Footer from './components/Footer';
import './App.css';
import Events from './pages/Events';
import Articles from './pages/Articles';
import Merch from './pages/Merch';

function Main() {

  const location = useLocation();

  const getBackgroundColor = (path) => {
    switch (path) {
      case '/merch':
        return '#f0f0f0'; //Different background colour for merch page
      default:
        return '#152a51'; //default ece dark blue
    }
  };

  const backgroundColor = getBackgroundColor(location.pathname);

  document.body.style.backgroundColor = backgroundColor;

  return (
    <div style={{backgroundColor}}>
      <BrowserView>
        <NavbarDesktop/>
        <div style={{ height: "80px"}} />
        </BrowserView>
      <MobileView>
        <NavbarMobile/>
        <div style={{ height: "80px"}} />
        </MobileView>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="meettheteam" element={<MeetTheTeam />} />
        <Route path="academics" element={<Academics />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="resources" element={<Resources />} />
        <Route path="eventsandmentorship" element={<EventsAndMentorship />} />
        <Route path="events" element={<Events />} />
        <Route path="articles" element={<Articles />} />
        <Route path="merch" element={<Merch />} />
      </Routes>
      <div style={{ height: "70px"}} />
      <Footer/>
    </div>
  );

}

export default Main;
