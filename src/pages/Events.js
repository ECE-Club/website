import React from 'react';
import { Typography } from '@mui/material';
import { MobileView } from 'react-device-detect';
import { BrowserView } from 'react-device-detect';

function Events() {

    function goToUrl(url) {
        window.open(url, '_blank');
    }

    return (
        <div>
            <Typography sx={{ color: "white", margin: "10px 30px 0 30px" }} variant="h4">
                Announcements
            </Typography>
            <BrowserView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSfe2Fi1T1Sx8RWgKLjzIY1PtfE0xe8pYulswRiAArXemYGvdg/viewform")}>
                                <img src="/imgs/event_icons/LockerRental.png" style={{ width: "140px", height: "140px" }} />                        
                            </div>
                            <div style={{ marginLeft: "20px", width: "calc(100% - 160px)" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div onClick={() => goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSfe2Fi1T1Sx8RWgKLjzIY1PtfE0xe8pYulswRiAArXemYGvdg/viewform")} style={{ fontWeight: 'bold' }}> ECE Common Room Locker Rentals </div>
                                    </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word" }} variant="h6">
                                    <div style={{textAlign: "justify"}}>
                                        Need a spot for your stuff? ECE Club is renting lockers in the ECE Common Room (BA1120)! With only 60 lockers available, secure yours ASAP 
                                        and share it with friends to save money! <br /> Just bring your own lock (as we won't be keeping your lock combo)🔒 Hurry before they're all gone! 💥
                                    </div>
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSfe2Fi1T1Sx8RWgKLjzIY1PtfE0xe8pYulswRiAArXemYGvdg/viewform")}
                                >
                                    Sign up today!
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://www.instagram.com/p/C_3dgc0vDrm/?hl=en")}
                                >
                                    Check out our Instagram Post for more info!
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSfe2Fi1T1Sx8RWgKLjzIY1PtfE0xe8pYulswRiAArXemYGvdg/viewform")}>
                                <img src="/imgs/event_icons/LockerRental.png" style={{ width: "200px", height: "200px" }} />                        
                            </div>
                            <div style={{ marginTop: "10px", width: "100%" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "5px 0" }} variant="h5">
                                    <div onClick={() => goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSfe2Fi1T1Sx8RWgKLjzIY1PtfE0xe8pYulswRiAArXemYGvdg/viewform")} style={{ fontWeight: 'bold', textAlign: "center"}}> ECE Common Room Locker Rentals </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "5px 8px", overflowWrap: "break-word" }} variant="h7">
                                    <div style={{textAlign: "justify"}}>
                                        Need a spot for your stuff? ECE Club is renting lockers in the ECE Common Room (BA1120)! With only 60 lockers available, secure yours ASAP 
                                        and share it with friends to save money! <br /> Just bring your own lock (as we won't be keeping your lock combo)🔒 Hurry before they're all gone! 💥
                                    </div>
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSfe2Fi1T1Sx8RWgKLjzIY1PtfE0xe8pYulswRiAArXemYGvdg/viewform")}
                                >
                                    Sign up today!
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://www.instagram.com/p/C_3dgc0vDrm/?hl=en")}
                                >
                                    Check out our Instagram Post for more info!
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </MobileView>

            <br />
            <Typography sx={{ color: "white", margin: "10px 30px 0 30px" }} variant="h4">
                Events
            </Typography>
            <Typography sx={{ color: "white", margin: "10px 30px 10px 30px" }} variant="h6">
                Explore our catalogue of upcoming and past events, showcasing a spectrum of amazing events.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', color: "white", margin: "30px 30px -20px 30px" }} variant="h6">
                Upcoming Events:
            </Typography>
            <br/>
            <BrowserView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSf-Z4oDM_4BmDsTrpbbNT9AnD7rFkKIqXHsyGWnzMpBSX9q7A/viewform")}>
                                <img src="/imgs/event_icons/PluggedIn.png" style={{ width: "140px", height: "140px" }} />                        
                            </div>
                            <div style={{ marginLeft: "20px", width: "calc(100% - 160px)" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div onClick={() => goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSf-Z4oDM_4BmDsTrpbbNT9AnD7rFkKIqXHsyGWnzMpBSX9q7A/viewform")} style={{ fontWeight: 'bold' }}> Plugged In: Meet your ECE Family! </div>
                                        <div style={{ textAlign: "right" }}> October 20th, 2025 </div>
                                    </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word" }} variant="h6">
                                    <div style={{textAlign: "justify"}}>
                                    Come to BA1120 on <b>Monday, October 20th</b> at <b>6:00 - 7:30 PM</b> to enjoy free pizza, Kahoot, drinks, games, and more! We will also be selling ECE merch at the event.
                                    </div>
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSf-Z4oDM_4BmDsTrpbbNT9AnD7rFkKIqXHsyGWnzMpBSX9q7A/viewform")}
                                >
                                    RSVP today!
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://www.instagram.com/ece__club/")}
                                >
                                    Check out our Instagram for more info!
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSf-Z4oDM_4BmDsTrpbbNT9AnD7rFkKIqXHsyGWnzMpBSX9q7A/viewform")}>
                                <img src="/imgs/event_icons/PluggedIn.png" style={{ width: "200px", height: "200px" }} />                        
                            </div>
                            <div style={{ marginTop: "10px", width: "100%" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "5px 0" }} variant="h5">
                                    <div onClick={() => goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSf-Z4oDM_4BmDsTrpbbNT9AnD7rFkKIqXHsyGWnzMpBSX9q7A/viewform")} style={{ fontWeight: 'bold' }}> Plugged In: Meet your ECE Family! </div>
                                    <div style={{ textAlign: "right" }}> October 20th, 2025 </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "5px 8px", overflowWrap: "break-word" }} variant="h7">
                                    <div style={{textAlign: "justify"}}>
                                        Come to BA1120 on <b>Monday, October 20th</b> at <b>6:00 - 7:30 PM</b> to enjoy free pizza, Kahoot, drinks, games, and more! We will also be selling ECE merch at the event. 
                                    </div>
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSf-Z4oDM_4BmDsTrpbbNT9AnD7rFkKIqXHsyGWnzMpBSX9q7A/viewform")}
                                >
                                    RSVP today!
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://www.instagram.com/ece__club/")}
                                >
                                    Check out our Instagram for more info!
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </MobileView>
            
            <Typography sx={{ fontWeight: 'bold', color: "white", margin: "30px 30px -20px 30px" }} variant="h6">
                Past Events:
            </Typography>
            <br/>
            <BrowserView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://docs.google.com/forms/d/1YA1mwKiwX8piGdrC7PJ7GPpY6cPCdDaGLDLckC2f_cA/viewform?edit_requested=true")}>
                                <img src="/imgs/event_icons/PingPong.png" style={{ width: "140px", height: "140px" }} />                        
                            </div>
                            <div style={{ marginLeft: "20px", width: "calc(100% - 160px)" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div onClick={() => goToUrl("https://docs.google.com/forms/d/1YA1mwKiwX8piGdrC7PJ7GPpY6cPCdDaGLDLckC2f_cA/viewform?edit_requested=true")} style={{ fontWeight: 'bold' }}> Ping Pong Tournament </div>
                                        <div style={{ textAlign: "right" }}> March 7th, 2025 </div>
                                    </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word" }} variant="h6">
                                    <div style={{textAlign: "justify"}}>
                                    Midterm season got you stressed? Take a break and unwind with some friendly competition! A Ping Pong Tournament is happening AGAIN on <b>March 7th</b> from <b>6:00-7:30 PM</b> in the ECE Common Room 
                                    (BA1120). 
                                    </div>
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://docs.google.com/forms/d/1YA1mwKiwX8piGdrC7PJ7GPpY6cPCdDaGLDLckC2f_cA/viewform?edit_requested=true")}
                                >
                                    Sign up today!
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://www.instagram.com/p/DGyMXpNPv4m/?hl=en")}
                                >
                                    Check out our Instagram for more info!
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://docs.google.com/forms/d/1YA1mwKiwX8piGdrC7PJ7GPpY6cPCdDaGLDLckC2f_cA/viewform?edit_requested=true")}>
                                <img src="/imgs/event_icons/PingPong.png" style={{ width: "200px", height: "200px" }} />                        
                            </div>
                            <div style={{ marginTop: "10px", width: "100%" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "5px 0" }} variant="h5">
                                    <div onClick={() => goToUrl("https://docs.google.com/forms/d/1YA1mwKiwX8piGdrC7PJ7GPpY6cPCdDaGLDLckC2f_cA/viewform?edit_requested=true")} style={{ fontWeight: 'bold' }}> Ping Pong Tournament </div>
                                    <div style={{ textAlign: "right" }}> March 7th, 2025 </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "5px 8px", overflowWrap: "break-word" }} variant="h7">
                                    <div style={{textAlign: "justify"}}>
                                        Midterm season got you stressed? Take a break and unwind with some friendly competition! A Ping Pong Tournament is happening AGAIN on <b>March 7th</b> from <b>6:00-7:30 PM</b> in the ECE Common Room 
                                        (BA1120). 
                                    </div>
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://docs.google.com/forms/d/1YA1mwKiwX8piGdrC7PJ7GPpY6cPCdDaGLDLckC2f_cA/viewform?edit_requested=true")}
                                >
                                    Sign up today!
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://www.instagram.com/p/DGyMXpNPv4m/?hl=en")}
                                >
                                    Check out our Instagram for more info!
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </MobileView>
            <BrowserView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.tickettailor.com/events/ececlub/1523837")}>
                                <img src="/imgs/event_icons/ECEDinnerDanceVenue.png" style={{ width: "140px", height: "140px" }} />                        
                            </div>
                            <div style={{ marginLeft: "20px", width: "calc(100% - 160px)" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div onClick={() => goToUrl("https://www.tickettailor.com/events/ececlub/1523837")} style={{ fontWeight: 'bold' }}> ECE Dinner Dance 2T5 </div>
                                        <div style={{ textAlign: "right" }}> February 14th, 2025 </div>
                                    </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word" }} variant="h6">
                                    <div style={{textAlign: "justify"}}>
                                        <b>Mark your calendars: February 14th, 2025! </b> This year, we're hosting our event at the stunning <u> Chateau Le Jardin</u> in Woodbridge, ON 
                                        that can accommodate up to 400 guests. <br/> Tickets will include a 3-course meal, an open bar🥂, a DJ + music 🎶, and a photobooth to capture all the memories. Hurry before they're sold out! 💃
                                    </div>
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://www.tickettailor.com/events/ececlub/1523837")}
                                >
                                    Get your tickets today!
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://www.instagram.com/p/DEi2AE7vP61/?hl=en")}
                                >
                                    Check out our Instagram for more info!
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.tickettailor.com/events/ececlub/1523837")}>
                                <img src="/imgs/event_icons/ECEDinnerDanceVenue.png" style={{ width: "200px", height: "200px" }} />                        
                            </div>
                            <div style={{ marginTop: "10px", width: "100%" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "5px 0" }} variant="h5">
                                    <div onClick={() => goToUrl("https://www.tickettailor.com/events/ececlub/1523837")} style={{ fontWeight: 'bold' }}> ECE Dinner Dance 2T5 </div>
                                    <div style={{ textAlign: "right" }}> February 14th, 2025 </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "5px 8px", overflowWrap: "break-word" }} variant="h7">
                                    <div style={{textAlign: "justify"}}>
                                        <b>Mark your calendars: February 14th, 2025! </b> This year, we're hosting our event at the stunning <u> Chateau Le Jardin</u> in Woodbridge, ON 
                                        that can accommodate up to 400 guests. <br/> Tickets will include a 3-course meal, an open bar🥂, a DJ + music 🎶, and a photobooth to capture all the memories. Hurry before they're sold out! 💃
                                    </div>
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://www.tickettailor.com/events/ececlub/1523837")}
                                >
                                    Get your tickets today!
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://www.instagram.com/p/DEi2AE7vP61/?hl=en")}
                                >
                                    Check out our Instagram for more info!
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </MobileView>
            <BrowserView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", alignItems: "center" }}> 
                            <div onClick={() => goToUrl("https://www.instagram.com/p/DBpLPZrS1In/")}>
                                <img src="/imgs/event_icons/HalloweenEscape.png" style={{ width: "140px", height: "140px" }} />                        
                            </div>
                            <div style={{ marginLeft: "20px", width: "calc(100% - 160px)" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div onClick={() => goToUrl("https://www.instagram.com/p/DBpLPZrS1In/")} style={{ fontWeight: 'bold' }}> Halloween Escape Room </div>
                                        <div style={{ textAlign: "right" }}> November 8th, 2024 </div>
                                    </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word" }} variant="h6">
                                    <div style={{textAlign: "justify"}}>
                                        Ready for a Spooky Challenge? 🎃🦇 Join us for the ECE Club’s Halloween Escape Room on 
                                        NOVEMBER 8th at the ECE COMMON ROOM! Gather your friends (2-6 people) and see if you can 
                                        make it out in time. Register now and secure your spot! 👻
                                    </div>
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSeG4d8acWlP27Fpe0-R1MX02yfElDsTu-YVo3W1DYglCQvpeQ/viewform")}
                                >
                                    Sign up today!
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.instagram.com/p/DBpLPZrS1In/")}>
                                <img src="/imgs/event_icons/HalloweenEscape.png" style={{ width: "200px", height: "200px" }} />                        
                            </div>
                            <div style={{ marginTop: "10px", width: "100%" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "5px 0" }} variant="h5">
                                    <div onClick={() => goToUrl("https://www.instagram.com/p/DBpLPZrS1In/")} style={{ fontWeight: 'bold', textAlign: "center"}}> Halloween Escape Room </div>
                                </Typography>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "-10px 0" }} variant="h6">
                                    <div style={{ textAlign: "center" }}> November 8th, 2024 </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "5px 8px", overflowWrap: "break-word" }} variant="h7">
                                    <div style={{textAlign: "justify"}}>
                                    Ready for a Spooky Challenge? 🎃🦇 Join us for the ECE Club’s Halloween Escape Room on 
                                    NOVEMBER 8th at the ECE COMMON ROOM! Gather your friends (2-6 people) and see if you can 
                                    make it out in time. Register now and secure your spot! 👻
                                    </div>
                                </Typography>
                                <Typography
                                    sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                    variant="h6"
                                    onClick={() => goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSeG4d8acWlP27Fpe0-R1MX02yfElDsTu-YVo3W1DYglCQvpeQ/viewform")}
                                >
                                    Sign up today!
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </MobileView>
            <BrowserView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.instagram.com/p/C4jd1cePoaV/")}>
                                <img src="/imgs/event_icons/PingPong.png" style={{ width: "140px", height: "140px" }} />                        
                            </div>
                            <div style={{ marginLeft: "20px", width: "calc(100% - 160px)" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div onClick={() => goToUrl("https://www.instagram.com/p/C4jd1cePoaV/")} style={{ fontWeight: 'bold' }}> Ping Pong Tournament </div>
                                        <div style={{ textAlign: "right" }}> March 19th, 2024 </div>
                                    </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word" }} variant="h6">
                                    <div style={{textAlign: "justify"}}>
                                        A Ping Pong Tournament is happening AGAIN on March 19th at 6:10 PM in the ECE Common Room 
                                        (BA1120). Come for some competitive fun while enjoying free pop & pizza, and battle it out 
                                        for awesome ECE-themed prizes! Don’t want to miss the game? Sign up link is in our Linktree!
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.instagram.com/p/C4jd1cePoaV/")}>
                                <img src="/imgs/event_icons/PingPong.png" style={{ width: "200px", height: "200px" }} />                        
                            </div>
                            <div style={{ marginTop: "10px", width: "100%" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "5px 0" }} variant="h5">
                                    <div onClick={() => goToUrl("https://www.instagram.com/p/C4jd1cePoaV/")} style={{ fontWeight: 'bold', textAlign: "center"}}> Ping Pong Tournament </div>
                                </Typography>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "-10px 0" }} variant="h6">
                                    <div style={{ textAlign: "center" }}> March 19th, 2024 </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "5px 8px", overflowWrap: "break-word" }} variant="h7">
                                    <div style={{textAlign: "justify"}}>
                                        A Ping Pong Tournament is happening AGAIN on March 19th at 6:10 PM in the ECE Common Room 
                                        (BA1120). Come for some competitive fun while enjoying free pop & pizza, and battle it out 
                                        for awesome ECE-themed prizes! Don’t want to miss the game? Sign up link is in our Linktree!
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </MobileView>
            
            <BrowserView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.instagram.com/p/C30pD-xPWIG/")}>
                                <img src="/imgs/event_icons/PrenubPub.png" style={{ width: "140px", height: "140px" }} />                        
                            </div>
                            <div style={{ marginLeft: "20px", width: "calc(100% - 160px)" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div onClick={() => goToUrl("https://www.instagram.com/p/C30pD-xPWIG/")} style={{ fontWeight: 'bold' }}> ECE Iron Ring After Party </div>
                                        <div style={{ textAlign: "right" }}> March 2nd, 2024 </div>
                                    </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word" }} variant="h6">
                                    <div style={{textAlign: "justify"}}>
                                        Attention graduating ECEs! Join us for an after-party on Saturday, March 2nd, 6:30 pm at 
                                        Prenup Pub (191 College St) to celebrate receiving your iron ring. Enjoy food, drinks, and 
                                        fun with fellow ECEs! RSVP via the form in our linktree ASAP for venue planning. Friends 
                                        are welcome to join; fill out the form too. ECEs receiving rings will have priority access 
                                        to food if venue capacity is reached.
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.instagram.com/p/C30pD-xPWIG/")}>
                                <img src="/imgs/event_icons/PrenubPub.png" style={{ width: "200px", height: "200px" }} />                        
                            </div>
                            <div style={{ marginTop: "10px", width: "100%" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "5px 0" }} variant="h5">
                                    <div onClick={() => goToUrl("https://www.instagram.com/p/C30pD-xPWIG/")} style={{ fontWeight: 'bold', textAlign: "center"}}> ECE Iron Ring After Party </div>
                                </Typography>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "-10px 0" }} variant="h6">
                                    <div style={{ textAlign: "center" }}> March 2nd, 2024 </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "5px 8px", overflowWrap: "break-word" }} variant="h7">
                                    <div style={{textAlign: "justify"}}>
                                        Attention graduating ECEs! Join us for an after-party on Saturday, March 2nd, 6:30 pm at 
                                        Prenup Pub (191 College St) to celebrate receiving your iron ring. Enjoy food, drinks, and 
                                        fun with fellow ECEs! RSVP via the form in our linktree ASAP for venue planning. Friends 
                                        are welcome to join; fill out the form too. ECEs receiving rings will have priority access 
                                        to food if venue capacity is reached.
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </MobileView>

            <BrowserView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.instagram.com/p/C30hK3wP1ND/")}>
                                <img src="/imgs/event_icons/UofTECE.png" style={{ width: "140px", height: "140px" }} />                        
                            </div>
                            <div style={{ marginLeft: "20px", width: "calc(100% - 160px)" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div onClick={() => goToUrl("https://www.instagram.com/p/C30hK3wP1ND/")} style={{ fontWeight: 'bold' }}> ECE Department Feedback Session </div>
                                        <div style={{ textAlign: "right" }}> March 1st, 2024 </div>
                                    </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word" }} variant="h6">
                                    <div style={{textAlign: "justify"}}>
                                    Attention ECE Students!

                                    We need your feedback! Share your thoughts on the ECE program, Prof. Deepa Kundur, and 
                                    the future of ECE at UofT. Join us this Friday, March 1st, 12PM at the ECE Common Room (BA1120). 
                                    Free food provided by the Dean’s Office. RSVP via the link in our bio! Can't attend? Use the input 
                                    box at the form's bottom to share your opinions! Your input is valuable and will shape the future 
                                    of our department. Don't miss this opportunity to make your voice heard!
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.instagram.com/p/C30hK3wP1ND/")}>
                                <img src="/imgs/event_icons/UofTECE.png" style={{ width: "200px", height: "200px" }} />                        
                            </div>
                            <div style={{ marginTop: "10px", width: "100%" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "5px 0" }} variant="h5">
                                    <div onClick={() => goToUrl("https://www.instagram.com/p/C30hK3wP1ND/")} style={{ fontWeight: 'bold', textAlign: "center"}}> ECE Department Feedback Session </div>
                                </Typography>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "-10px 0" }} variant="h6">
                                    <div style={{ textAlign: "center" }}> March 1st, 2024 </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "5px 8px", overflowWrap: "break-word" }} variant="h7">
                                    <div style={{textAlign: "justify"}}>
                                    Attention ECE Students!

                                    We need your feedback! Share your thoughts on the ECE program, Prof. Deepa Kundur, and 
                                    the future of ECE at UofT. Join us this Friday, March 1st, 12PM at the ECE Common Room (BA1120). 
                                    Free food provided by the Dean’s Office. RSVP via the link in our bio! Can't attend? Use the input 
                                    box at the form's bottom to share your opinions! Your input is valuable and will shape the future 
                                    of our department. Don't miss this opportunity to make your voice heard!
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </MobileView>

            <BrowserView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.tickettailor.com/events/ececlub/1061393")}>
                                <img src="/imgs/event_icons/ECEDinnerDanceVenue.png" style={{ width: "140px", height: "140px" }} />                        
                            </div>
                            <div style={{ marginLeft: "20px", width: "calc(100% - 160px)" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div onClick={() => goToUrl("https://www.tickettailor.com/events/ececlub/1061393")} style={{ fontWeight: 'bold' }}> ECE Dinner Dance 2T4 </div>
                                        <div style={{ textAlign: "right" }}> February 16th, 2024 </div>
                                    </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word" }} variant="h6">
                                    <div style={{textAlign: "justify"}}>
                                        Mark your calendars! ECE Dinner Dance will return on February 16th, 2024! 
                                        Our venue this year is Chateau Le Jardin, a gorgeous mansion located in the heart of Woodbridge, ON, and able to accommodate up to 400 people. 
                                        Dinner Dance tickets will include a 3-course meal, an open bar, a DJ + music, and transportation.
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.tickettailor.com/events/ececlub/1061393")}>
                                <img src="/imgs/event_icons/ECEDinnerDanceVenue.png" style={{ width: "200px", height: "200px" }} />                        
                            </div>
                            <div style={{ marginTop: "10px", width: "100%" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "5px 0" }} variant="h5">
                                    <div onClick={() => goToUrl("https://www.tickettailor.com/events/ececlub/1061393")} style={{ fontWeight: 'bold', textAlign: "center"}}> ECE Dinner Dance 2T4 </div>
                                </Typography>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "-10px 0" }} variant="h6">
                                    <div style={{ textAlign: "center" }}> February 16th, 2024 </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "5px 8px", overflowWrap: "break-word" }} variant="h7">
                                    <div style={{textAlign: "justify"}}>
                                        Mark your calendars! ECE Dinner Dance will return on February 16th, 2024! 
                                        Our venue this year is Chateau Le Jardin, a gorgeous mansion located in the heart of Woodbridge, ON, and able to accommodate up to 400 people. 
                                        Dinner Dance tickets will include a 3-course meal, an open bar, a DJ + music, and transportation.
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </MobileView>

            <BrowserView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.instagram.com/p/C3GBJrLLJX8/")}>
                                <img src="/imgs/event_icons/ValentinesDay.png" style={{ width: "140px", height: "140px" }} />                        
                            </div>
                            <div style={{ marginLeft: "20px", width: "calc(100% - 160px)" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div onClick={() => goToUrl("https://www.instagram.com/p/C3GBJrLLJX8/")} style={{ fontWeight: 'bold' }}> Valentine's Day Candy Grams </div>
                                        <div style={{ textAlign: "right" }}> February 14th, 2024 </div>
                                    </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word" }} variant="h6">
                                    <div style={{textAlign: "justify"}}>
                                        This Valentine’s Day, Feb 14th, come to the ECE common room (BA1120) from 10 AM to 2 PM for a 
                                        Sweet treat! We’re selling candy grams for just $2 each!! Spread some joy this Valentine’s Day 
                                        by getting a candy gram for your friends, classmates, TAs, or your favourite prof! We look forward 
                                        to seeing you there!
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.instagram.com/p/C3GBJrLLJX8/")}>
                                <img src="/imgs/event_icons/ValentinesDay.png" style={{ width: "200px", height: "200px" }} />                        
                            </div>
                            <div style={{ marginTop: "10px", width: "100%" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "5px 0" }} variant="h5">
                                    <div onClick={() => goToUrl("https://www.instagram.com/p/C3GBJrLLJX8/")} style={{ fontWeight: 'bold', textAlign: "center"}}> Valentine's Day Candy Grams </div>
                                </Typography>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "-10px 0" }} variant="h6">
                                    <div style={{ textAlign: "center" }}> February 14th, 2024 </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "5px 8px", overflowWrap: "break-word" }} variant="h7">
                                    <div style={{textAlign: "justify"}}>
                                        This Valentine’s Day, Feb 14th, come to the ECE common room (BA1120) from 10 AM to 2 PM for a 
                                        Sweet treat! We’re selling candy grams for just $2 each!! Spread some joy this Valentine’s Day 
                                        by getting a candy gram for your friends, classmates, TAs, or your favourite prof! We look forward 
                                        to seeing you there!
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </MobileView>

            <BrowserView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.instagram.com/p/C2Pvrr4Mk8X/")}>
                                <img src="/imgs/event_icons/PEYCo-op.png" style={{ width: "130px", height: "130px" }} />                        
                            </div>
                            <div style={{ marginLeft: "20px", width: "calc(100% - 160px)" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div onClick={() => goToUrl("https://www.instagram.com/p/C2Pvrr4Mk8X/")} style={{ fontWeight: 'bold' }}> PEY Co-op ECE Common Room Chat </div>
                                        <div style={{ textAlign: "right" }}> January 24th, 2024 </div>
                                    </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word" }} variant="h6">
                                    <div style={{textAlign: "justify"}}>
                                        Do you have questions about navigating PEY Co-op as an ECE student? 
                                        Your PEY Co-op Peer Coach, Vama, has the answers! She’ll be hosting a PEY Co-op chat in the 
                                        ECE Common Room from 1:00 PM – 2:00 PM on Wednesday, January 24th. This is a great opportunity 
                                        to get support from an upper-year student in your program who knows what it’s like to find PEY 
                                        Co-op success. Swag and snacks provided!
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.instagram.com/p/C2Pvrr4Mk8X/")}>
                                <img src="/imgs/event_icons/PEYCo-op.png" style={{ width: "200px", height: "200px" }} />                        
                            </div>
                            <div style={{ marginTop: "10px", width: "100%" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                                    <div onClick={() => goToUrl("https://www.instagram.com/p/C2Pvrr4Mk8X/")} style={{ fontWeight: 'bold', textAlign: "center" }}> PEY Co-op ECE Common Room Chat </div>
                                </Typography>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "-10px 0" }} variant="h6">
                                    <div style={{ textAlign: "center" }}> January 24th, 2024 </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "5px 8px", overflowWrap: "break-word" }} variant="h7">
                                    <div style={{textAlign: "justify"}}>
                                        Do you have questions about navigating PEY Co-op as an ECE student? 
                                        Your PEY Co-op Peer Coach, Vama, has the answers! She’ll be hosting a PEY Co-op chat in the 
                                        ECE Common Room from 1:00 PM – 2:00 PM on Wednesday, January 24th. This is a great opportunity 
                                        to get support from an upper-year student in your program who knows what it’s like to find PEY 
                                        Co-op success. Swag and snacks provided!
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </MobileView>

            <BrowserView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.instagram.com/p/C2OlZLgMbEL/")}>
                                <img src="/imgs/event_icons/Magellan101.png" style={{ width: "150px", height: "150px" }} />                        
                            </div>
                            <div style={{ marginLeft: "20px", width: "calc(100% - 160px)" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div onClick={() => goToUrl("https://www.instagram.com/p/C2OlZLgMbEL/")} style={{ fontWeight: 'bold' }}> Magellan 101 Presentation </div>
                                        <div style={{ textAlign: "right" }}> January 19th, 2024 </div>
                                    </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word" }} variant="h6">
                                    <div style={{textAlign: "justify"}}>
                                        Are you in second-year ECE and have questions about Magellan? 🤔 ECE club is hosting a 
                                        Magellan 101 session where you’ll get the inside scoop directly from upper years about 
                                        different courses before you have to do course selection! You’ll become familiar with the 
                                        course selection process as well as the different areas and certain engineering minors. 
                                        Also, ✨ FREE DINNER ✨ will be provided! Come join us in GB120 on Friday, January 19th 
                                        from 6:30 - 8:00 pm!
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{ borderRadius: "20px", background: "white", padding: "20px", margin: "10px 30px 18px 30px" }}>
                    <Typography>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div onClick={() => goToUrl("https://www.instagram.com/p/C2OlZLgMbEL/")}>
                                <img src="/imgs/event_icons/Magellan101.png" style={{ width: "200px", height: "200px" }} />                        
                            </div>
                            <div style={{ marginTop: "10px", width: "100%" }}>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "10px 0" }} variant="h5">
                                    <div onClick={() => goToUrl("https://www.instagram.com/p/C2OlZLgMbEL/")} style={{ fontWeight: 'bold', textAlign: "center" }}> Magellan 101 Presentation </div>
                                </Typography>
                                <Typography sx={{ cursor:'pointer', color: "#152a51", margin: "-10px 0" }} variant="h6">
                                    <div style={{ textAlign: "center" }}> January 19th, 2024 </div>
                                </Typography>
                                <Typography sx={{ color: "#152a51", margin: "5px 8px", overflowWrap: "break-word" }} variant="h7">
                                    <div style={{textAlign: "justify"}}>
                                        Are you in second-year ECE and have questions about Magellan? 🤔 ECE club is hosting a 
                                        Magellan 101 session where you’ll get the inside scoop directly from upper years about 
                                        different courses before you have to do course selection! You’ll become familiar with the 
                                        course selection process as well as the different areas and certain engineering minors. 
                                        Also, ✨ FREE DINNER ✨ will be provided! Come join us in GB120 on Friday, January 19th 
                                        from 6:30 - 8:00 pm!
                                    </div>
                                </Typography>
                            </div>
                        </div>
                    </Typography>
                </div>
            </MobileView>
        </div>
        
    )
}
  
export default Events;