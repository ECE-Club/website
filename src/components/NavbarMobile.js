import React from 'react';
import { NavLink } from "react-router-dom";
import { AppBar, IconButton } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Drawer } from '@mui/material';
import { Box } from '@mui/material';
import { Menu } from '@mui/icons-material';
import '../NavbarMobile.css';

function NavbarMobile() {
   
    const [drawer, setDrawer] = React.useState(false);

    return (
        <AppBar style={{ height: "60px", background: '#152a51', top: 0, left: 0, right: 0 }} position="fixed">
            <Toolbar sx={{overflowX: "auto", overflowY: "hidden", whiteSpace: "nowrap"}}>
                <img onClick={() => window.location.replace("/")} style={{ cursor:'pointer', marginRight: "auto", height: "auto", maxWidth: "40px"}} src="favicon.svg" />
                <Typography onClick={() => window.location.replace("/")} fontSize="2.5vh" variant="h6" className="nav-item" style={{cursor:'pointer', flex: 1}}>
                    ECE Club
                </Typography>
                <Box
                    m={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    <IconButton
                        onClick={() => setDrawer(true)}
                    >
                        <Menu style={{fontSize:"5vh", fill: "white"}}/>
                    </IconButton>
                </Box>
                <Drawer
                    PaperProps={{
                        sx: {
                          backgroundColor: "#152a51",
                        }
                    }}
                    anchor={"right"}
                    open={drawer}
                    onClose={() => setDrawer(false)}
                >
                    <NavLink to="events" activeClassName='active' className="nav-item"> Events </NavLink>
                    {/* <NavLink to="aboutus" activeClassName='active' className="nav-item"> About Us </NavLink> */}
                    <NavLink to="meettheteam" activeClassName='active' className="nav-item"> Meet The Team </NavLink>
                    {/* <NavLink to="academics" activeClassName='active' className="nav-item"> Academics </NavLink> */}
                    {/* <NavLink to="eventsandmentorship" activeClassName='active' className="nav-item"> Events/Mentorship </NavLink> */}
                    {/* <NavLink to="spaces" activeClassName='active' className="nav-item"> Spaces </NavLink> */}
                    {/* <NavLink to="merch" activeClassName='active' className="nav-item"> Merch </NavLink> */}
                    <NavLink to="contactus" activeClassName='active' className="nav-item"> Contact Us </NavLink>
                    <NavLink to="resources" activeClassName='active' className="nav-item"> Resources </NavLink>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}

export default NavbarMobile;
