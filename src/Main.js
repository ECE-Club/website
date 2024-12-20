import React from 'react';
import { Routes, Route } from "react-router-dom";
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

function Main() {

  document.body.style.backgroundColor = "#152a51";

  return (
    <div style={{backgroundColor:"#152a51"}}>
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
        
      </Routes>
      <div style={{ height: "70px"}} />
      <Footer/>
    </div>
  );

}

export default Main;
