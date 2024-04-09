import React from 'react';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Instagram } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { SmartToy } from '@mui/icons-material';
import { Mail } from '@mui/icons-material';
import { Link } from '@mui/icons-material';
import ContactCard from '../components/ContactCard.js';

function ContactUs() {
    return (
        <div>
            <Typography sx={{ color: "white", margin: "10px 30px 0 30px" }} variant="h4">
                Contact Us
            </Typography>
            <Typography sx={{ color: "white", margin: "10px 30px 10px 30px" }} variant="h6">
                The best ways to get in touch.
            </Typography>
            <br />
            <Grid2
                alignItems="center" 
                container 
                spacing={2}
                justifyContent="center"
                sx={{ margin: "0px 25px 10px 30px" }}
            >
                <ContactCard
                    icon = {<Instagram style={{fontSize:"12vh", fill: "#152a51"}} />}
                    name = "Instagram"
                    link = "https://www.instagram.com/ece__club/"
                    at = "@ece__club"
                    info = "Announcements, promotions, and more. DMs always open."
                />
                <ContactCard
                    icon = {<SmartToy style={{fontSize:"12vh", fill: "#152a51"}} />}
                    name = "Discord"
                    link = "https://discord.gg/rhawdWcJR5"
                    at = "ECE Club"
                    info = "Our community. Join here for everything ECE Club."
                />
                <ContactCard
                    icon = {<Mail style={{fontSize:"12vh", fill: "#152a51"}} />}
                    name = "E-mail"
                    link = "mailto:ece@g.skule.ca"
                    at = "ece@g.skule.ca"
                    info = "Reach out here for formal inquiries. Fast replies."
                />
                <ContactCard
                    icon = {<Link style={{fontSize:"12vh", fill: "#152a51"}} />}
                    name = "Linktree"
                    link = "https://linktr.ee/ece__club"
                    at = "@ece__club"
                    info = "All of the links and resources you need in one place."
                />
            </Grid2>
        </div>
    )
}
  
export default ContactUs;