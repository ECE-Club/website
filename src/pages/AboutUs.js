import React from 'react';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

function AboutUs() {
    return (
        <div>
            <Typography sx={{ color: "white", margin: "10px 30px 0 30px" }} variant="h4">
                About Us
            </Typography>
            <Typography sx={{ color: "white", margin: "10px 30px 0 30px" }} variant="h6">
                What to know about the ECE Club.
            </Typography>
            <br />
            <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 10px 30px" }}>
                <Typography align="center" sx={{ color: "#152a51", fontStyle: "italic"}} variant="h5">
                    Who We Are
                </Typography>
                <Typography align="center" sx={{ color: "#152a51", margin: "10px 0 0 0" }} variant="h6">
                    We are a group of student volunteers dedicated to all things student life and 
                    academics for undergraduate ECE students at the University of Toronto.
                </Typography>
            </div>
            <br />
            <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 10px 30px" }}>
                <Typography align="center" sx={{ color: "#152a51", fontStyle: "italic"}} variant="h5">
                    What We Offer
                </Typography>
                <Typography align="center" sx={{ color: "#152a51", margin: "10px 0 0 0" }} variant="h6">
                    We are a group of student volunteers dedicated to all things student life and 
                    academics for undergraduate ECE students at the University of Toronto.
                </Typography>
            </div>
            <br />
            <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 10px 30px" }}>
                <Typography align="center" sx={{ color: "#152a51", fontStyle: "italic"}} variant="h5">
                    Our Mission
                </Typography>
                <Typography align="center" sx={{ color: "#152a51", margin: "10px 0 0 0" }} variant="h6">
                    We are a group of student volunteers dedicated to all things student life and 
                    academics for undergraduate ECE students at the University of Toronto.
                </Typography>
            </div>
        </div> 
    )

}
  
export default AboutUs;