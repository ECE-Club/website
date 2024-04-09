import React from 'react';
import { Typography } from '@mui/material';

function Resources() {

    function goToUrl(url) {
        window.location.replace(url);
    }

    return (
        <div>
            <Typography sx={{ color: "white", margin: "10px 30px 0 30px" }} variant="h4">
                Resources
            </Typography>
            <Typography sx={{ color: "white", margin: "10px 30px 10px 30px" }} variant="h6">
                Important documents and links that we would like you to see.
            </Typography>
            <br/>
            <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                <Typography onClick={() => goToUrl("https://docs.google.com/document/d/1_YZDNE1ODMwBik6ukCp-6s7zo2bXCEr9ls53k1fPM14/edit")} sx={{ cursor:'pointer', color: "#152a51", margin: "10px 30px 10px 30px" }} variant="h5">
                    1. Our Constitution
                </Typography>
                <Typography sx={{ color: "#152a51", margin: "10px 30px 10px 30px" }} variant="h6">
                    The Constitution of the University of Toronto Electrical and Computer Engineering Undergraduate Club. 
                    Serving as our main governing document. 
                    Click here to hear about the specifics of our purpose, our responsibilities,
                    and our general operation.
                </Typography>
            </div>
            <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                <Typography onClick={() => goToUrl("https://courses.skule.ca/")} sx={{ cursor:'pointer', color: "#152a51", margin: "10px 30px 10px 30px" }} variant="h5">
                    2. Skule Courses
                </Typography>
                <Typography sx={{ color: "#152a51", margin: "10px 30px 10px 30px" }} variant="h6">
                    The Skule Courses website managed by the University of Toronto Engineering Society. 
                    An archive of U of T Engineering courses, with past midterms, exams, notes, syllabi, and more.
                </Typography>
            </div>
        </div>
        
    )
}
  
export default Resources;