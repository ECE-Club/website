import React from 'react';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import TeamCard from '../components/TeamCard.js';
import Team from "../data/team.js"

function MeetTheTeam() {

    const TeamElements = Team.map((member, index) => 
            <Grid2>
                <TeamCard 
                    key={index}
                    picture={member.picture}
                    name={member.name}
                    role={member.role}
                    year={member.year}
                    contact={member.contact}
                />
            </Grid2>
        )
    
    return (
        <div>
            <Typography sx={{ color: "white", margin: "10px 30px 0 30px" }} variant="h4">
                Meet The Team (2T5 - 2T6)
            </Typography>
            <Typography sx={{ color: "white", margin: "10px 30px 10px 30px" }} variant="h6">
                More like a family than a team!
            </Typography>
            <br />
            <Grid2 
                alignItems="center" 
                container 
                spacing={2}
                justifyContent="center"
                sx={{margin: "0px 25px 10px 30px" }}
            >
                {TeamElements}
            </Grid2>
        </div>
    )
}
  
export default MeetTheTeam;