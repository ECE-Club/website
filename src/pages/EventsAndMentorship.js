import React from 'react';
import { Typography } from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Events from "../data/events.js"

function EventsAndMentorship() {
    return (
        <div>
            <Typography sx={{ color: "white", margin: "10px 30px 0 30px" }} variant="h4">
                Events/Mentorship
            </Typography>
            <Typography sx={{ color: "white", margin: "10px 30px 10px 30px" }} variant="h6">
                Be there or be square!
            </Typography>
            <Typography sx={{ color: "white", margin: "10px 30px 10px 30px" }} variant="h6">
            </Typography>
            <br />
            <div style={{ borderRadius: "20px", background: "white", margin: "0px 30px 0px 30px" }}>
                <Calendar 
                    localizer={momentLocalizer(moment)}
                    events={Events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500, margin: "0px 30px 0px 30px", paddingTop: "20px", paddingBottom: "20px"}}
                />
            </div>
            
        </div>
    )
}
  
export default EventsAndMentorship;