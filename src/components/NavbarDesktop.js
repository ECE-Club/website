import React from 'react';
import { NavLink } from "react-router-dom";
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import '../NavbarDesktop.css';

function NavbarDesktop() {
    return (
        <AppBar style={{ height: "65px", background: '#152a51', top: 0, left: 0, right: 0, sticky: "top" }}>
          <Toolbar sx={{overflowX: "auto", overflowY: "hidden", whiteSpace: "nowrap"}}>
            <img onClick={() => window.location.replace("/")} style={{ cursor:'pointer', marginRight: "auto", height: "auto", maxWidth: "50px"}} src="favicon.svg" />
            <Typography onClick={() => window.location.replace("/")} variant="h6" className="nav-item" style={{ cursor:'pointer', flex: 1 }}>
              ECE Club
            </Typography>
            <Box
              m={1}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <NavLink to="merch" activeClassName='active' className="nav-item"> Merch </NavLink>
              <NavLink to="events" activeClassName='active' className="nav-item"> Events </NavLink>
              <NavLink to="articles" activeClassName='active' className="nav-item"> Articles </NavLink>
              {/* <NavLink to="aboutus" activeClassName='active' className="nav-item"> About Us </NavLink> */}
              <NavLink to="meettheteam" activeClassName='active' className="nav-item"> Meet The Team </NavLink>
              {/* <NavLink to="academics" activeClassName='active' className="nav-item"> Academics </NavLink> */}
              {/* <NavLink to="eventsandmentorship" activeClassName='active' className="nav-item"> Events/Mentorship </NavLink> */}
              {/* <NavLink to="spaces" activeClassName='active' className="nav-item"> Spaces </NavLink> */}
              {/* <NavLink to="merch" activeClassName='active' className="nav-item"> Merch </NavLink> */}
              <NavLink to="contactus" activeClassName='active' className="nav-item"> Contact Us </NavLink>
              <NavLink to="resources" activeClassName='active' className="nav-item"> Resources </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
    )
}

export default NavbarDesktop;
