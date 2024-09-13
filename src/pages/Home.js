import React from 'react';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import ContactCard from '../components/ContactCard.js';
import { People } from '@mui/icons-material';
import { Inbox } from '@mui/icons-material';
import { Article } from '@mui/icons-material';
import { Event } from '@mui/icons-material';
import AnnouncementPop from '../components/AnnouncementPop.js';

function Home() {

    return (
        <div>
            <AnnouncementPop />
            <Typography sx={{ color: "white", margin: "10px 30px 0 30px" }} variant="h5">
                The University of Toronto 
            </Typography>
            <Typography sx={{ color: "white", margin: "10px 30px 0 30px" }} variant="h4">
                Electrical and Computer Engineering Club
            </Typography>
            <Typography sx={{ color: "white", margin: "10px 30px 10px 30px" }} variant="h5">
                Your first stop for life as a undergraduate ECE student at UofT.
            </Typography>
            <br />
            <Grid2
                container 
                spacing={2}
            >
                <Grid2 item sm={6} xs={12}>
                    <div style={{ margin: "10px 30px 0px 30px" }}>
                        <br/>
                        <Typography sx={{ color: "white"}} variant="h5">
                            Who We Are
                        </Typography>
                        <Typography sx={{ color: "white", margin: "10px 0 0 0" }} variant="h6">
                            We are a team of student volunteers dedicated to all things student life and 
                            academics for undergraduate ECE students at the University of Toronto. 
                            <br />
                            <br />
                            We organize events like the ECE Dinner Dance, run a mentorship program for 
                            lower-year ECE students,
                            manage spaces such as the ECE Common Room and Study Hall, and 
                            communicate with the ECE Professors on academic issues. 
                            If there's a large event that involves ECEs, odds are we're involved.
                        </Typography>
                    </div>
                </Grid2>
                <Grid2 style={{ verticalAlign: "middle", display: "table-cell"}} item sm={6} xs={12}>
                    <div style={{ position: "relative", width: "300px", height: "300px", margin: "60px auto" }}>
                        <img style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, margin: "30 auto"}} src="favicon.svg"/>
                    </div>
                </Grid2>
            </Grid2>
            <br />
            <br />
            <Grid2
                alignItems="center" 
                container 
                spacing={2}
                justifyContent="center"
                sx={{margin: "0px 25px 10px 30px" }}
            >
                <ContactCard
                    icon = {<Event style={{fontSize:"12vh", fill: "#152a51"}} />}
                    name = "Events"
                    link = "/events"
                    info = "Stay updated with our latest announcements and events!"
                />
                <ContactCard
                    icon = {<People style={{fontSize:"12vh", fill: "#152a51"}} />}
                    name = "Meet The Team"
                    link = "/meettheteam"
                    info = "Learn more about who's behind the scenes!"
                />
                <ContactCard
                    icon = {<Inbox style={{fontSize:"12vh", fill: "#152a51"}} />}
                    name = "Contact Us"
                    link = "/contactus"
                    info = "Some of the best ways to get in contact with the ECE Club."
                />
                <ContactCard
                    icon = {<Article style={{fontSize:"12vh", fill: "#152a51"}} />}
                    name = "Resources"
                    link = "/resources"
                    info = "Important ECE Club documents that we would like you to see."
                />
            </Grid2>
            <br />
        </div>
    )
}
  
export default Home;