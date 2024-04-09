import React from 'react';
import { Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { BrowserView, MobileView } from 'react-device-detect';
import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import { Paper } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { Instagram } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { Mail } from '@mui/icons-material';
import ContactCard from './DinnerDanceContact.js';
import './DinnerDance.css';

function DinnerDance() {

    function goToUrl(url) {
        window.location.replace(url);
    }

    return (
        <div style={{backgroundColor: "#122620"}}>

            {/* navbar */}
            <BrowserView>
                <AppBar  elevation={4} style={{ height: "80px", background: '#122620', top: 0, left: 0, right: 0, sticky: "top" }}>
                    <Toolbar sx={{overflowX: "auto", overflowY: "hidden", whiteSpace: "nowrap"}}>
                        <img style={{ marginRight: "auto", height: "auto", maxWidth: "50px"}} src="favicon2.svg" />
                        <Typography variant="h3" className="nav-item" style={{ marginTop: "3px", fontSize: "45px", fontFamily: 'Italiana', color: "#F4EBD0", flex: 1 }}>
                            ECE Dinner Dance 2T3
                        </Typography>
                    </Toolbar>
                </AppBar>
            </BrowserView>
            <MobileView>
            <AppBar  elevation={4} style={{ height: "80px", background: '#122620', top: 0, left: 0, right: 0, sticky: "top" }}>
                <Toolbar sx={{overflowX: "auto", overflowY: "hidden", whiteSpace: "nowrap"}}>
                    <img style={{ marginTop: "5px", marginRight: "auto", height: "auto", maxWidth: "50px"}} src="favicon2.svg" />
                    <Typography variant="h5" className="nav-item" style={{ fontSize: "28px", marginTop: "10px", fontFamily: 'Italiana', color: "#F4EBD0", flex: 1 }}>
                        ECE Dinner Dance 2T3
                    </Typography>
                </Toolbar>
            </AppBar>
            </MobileView>
            <div style={{ height: "100px"}} />

            {/* description */}
            <Grid2>
                <Card variant="outlined" sx={{ backgroundColor: "#F4EBD0", margin: "10px 50px 0 50px"  }}> 
                    <CardContent>
                        <Grid2 
                            direction="column"
                            alignItems="center" 
                            container 
                            spacing={0.7}
                            wrap="wrap"
                        >
                            <Grid2 item style={{ flexShrink: 1 }}>
                                <Typography variant="h4" className="nav-item" style={{ whiteSpace: "pre-line", borderRadius:"3px", backgroundColor:"#122620", marginTop: "5px", fontFamily: 'Italiana', color: "#F4EBD0", flex: 1 }}>
                                    SAVE THE DATE
                                </Typography>
                            </Grid2> 
                            <Grid2 item style={{ flexShrink: 1 }}>
                                <Typography align="center" variant="h5" className="nav-item" style={{ whiteSpace: "pre-line", marginTop: "5px", color: "#122620", flex: 1 }}>
                                    This year's ECE Dinner Dance will be taking place on:
                                </Typography>
                            </Grid2> 
                            <Grid2 item style={{ flexShrink: 1 }}>
                                <Typography align="center" variant="h4" className="nav-item" style={{ marginLeft: "15px", marginRight: "15px", whiteSpace: "pre-line", borderRadius:"5px", backgroundColor:"#122620", marginTop: "5px", fontFamily: 'Italiana', color: "#F4EBD0", flex: 1 }}>
                                    February 17th, 2023 from 6pm - 1am
                                </Typography>
                            </Grid2>
                            <Grid2 item style={{ flexShrink: 1 }}>
                                <Typography align="center" variant="h5" className="nav-item" style={{ whiteSpace: "pre-line", marginTop: "5px", color: "#122620", flex: 1 }}>
                                    Our venue this year is Paradise Halls, a beautiful banquet hall located in Concord, ON 
                                    able to accommodate up to 400 people. Dinner Dance tickets will include a 3-course meal 
                                    (with Halal and Vegetarian options), an open bar, a DJ + music, and transportation.
                                </Typography>
                            </Grid2> 
                        </Grid2>
                    </CardContent>
                    <CardMedia
                        component="img"
                        image="imgs/paradise1.jpg"
                        height="300px"
                    />
                </Card>
            </Grid2>
            <br />

            {/* tickets */}
            <Grid2>
                <Card variant="outlined" sx={{ backgroundColor: "#F4EBD0", margin: "10px 50px 0 50px"  }}> 
                    <CardContent>
                        <Grid2 
                            direction="column"
                            alignItems="center" 
                            container 
                            spacing={0.7}
                            wrap="wrap"
                        >
                            <Grid2 item style={{ flexShrink: 1 }}>
                                <Typography variant="h4" className="nav-item" style={{marginBottom: "10px", whiteSpace: "pre-line", borderRadius:"3px", backgroundColor:"#122620", marginTop: "5px", fontFamily: 'Italiana', color: "#F4EBD0", flex: 1 }}>
                                    TICKETS
                                </Typography>
                            </Grid2> 
                            <Typography align="center" variant="h5" className="nav-item" style={{ whiteSpace: "pre-line", color: "#122620", flex: 1 }}>
                                Ticket Sales begin January 11th, 2023 at 7pm.
                            </Typography>
                            <Grid2 
                                alignItems="center" 
                                container 
                                spacing={2}
                                justifyContent="center"
                                sx={{margin: "0px 25px 10px 30px" }}
                            >

                                <Grid2 item>
                                    <Card variant="outlined" sx={{ borderRadius: "5px", background: "#122620" }}> 
                                        <CardContent>
                                        <Grid2 
                                            direction="column"
                                            alignItems="center" 
                                            container 
                                            spacing={0.7}
                                        >
                                            <Grid2 item>  
                                                <Typography variant="h5" className="nav-item" style={{ whiteSpace: "pre-line", borderRadius:"3px", backgroundColor:"#122620", marginTop: "5px", fontFamily: 'Italiana', color: "#F4EBD0", flex: 1 }}>
                                                    Non-Alcoholic Ticket
                                                </Typography>
                                            </Grid2>
                                            <Grid2 item>
                                                <Typography variant="h3" className="nav-item" style={{ whiteSpace: "pre-line", fontFamily: 'Italiana', color: "#F4EBD0", flex: 1 }}>
                                                    $59
                                                </Typography>
                                            </Grid2>
                                            <Grid2 item>
                                                <Typography align="center" variant="h6" className="nav-item" style={{ whiteSpace: "pre-line", color: "#F4EBD0", flex: 1 }}>
                                                    3-Course Meal (Halal and Vegetarian options) 
                                                    <br />
                                                    Open Non-Alcoholic Bar
                                                    <br />
                                                    Transportation To/From Venue
                                                </Typography>
                                            </Grid2>
                                        </Grid2>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="large" onClick={() => goToUrl("https://app.tickettailor.com/events/ececlub/829138")} sx={{':hover': { backgroundColor: '#F4EBD0'}, margin: "-15px auto 10px auto", backgroundColor:"#F4EBD0"}}>
                                                <Typography variant="h5" style={{ fontFamily: 'Italiana' }} color="#122620">
                                                    Purchase
                                                </Typography> 
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid2>

                                <Grid2 item>
                                    <Card variant="outlined" sx={{ borderRadius: "5px", background: "#122620" }}> 
                                        <CardContent>
                                        <Grid2 
                                            direction="column"
                                            alignItems="center" 
                                            container 
                                            spacing={0.7}
                                        >
                                            <Grid2 item>  
                                                <Typography variant="h5" className="nav-item" style={{ whiteSpace: "pre-line", borderRadius:"3px", backgroundColor:"#122620", marginTop: "5px", fontFamily: 'Italiana', color: "#F4EBD0", flex: 1 }}>
                                                    Alcoholic Ticket
                                                </Typography>
                                            </Grid2>
                                            <Grid2 item>
                                                <Typography variant="h3" className="nav-item" style={{ whiteSpace: "pre-line", fontFamily: 'Italiana', color: "#F4EBD0", flex: 1 }}>
                                                    $69
                                                </Typography>
                                            </Grid2>
                                            <Grid2 item>
                                                <Typography align="center" variant="h6" className="nav-item" style={{ whiteSpace: "pre-line", color: "#F4EBD0", flex: 1 }}>
                                                    3-Course Meal (Halal and Vegetarian options) 
                                                    <br />
                                                    Open Alcoholic Bar
                                                    <br />
                                                    Transportation To/From Venue
                                                </Typography>
                                            </Grid2>
                                        </Grid2>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="large" onClick={() => goToUrl("https://app.tickettailor.com/events/ececlub/829138")} sx={{':hover': { backgroundColor: '#F4EBD0'}, margin: "-15px auto 10px auto", backgroundColor:"#F4EBD0"}}>
                                                <Typography variant="h5" style={{ fontFamily: 'Italiana' }} color="#122620">
                                                    Purchase
                                                </Typography> 
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid2>

                            </Grid2>
                        </Grid2>
                       
                    </CardContent>
                    <CardMedia
                        component="img"
                        image="imgs/paradise2.jpg"
                        height="300px"
                    />
                </Card>
            </Grid2>

            <div>
                <br />
                <Grid2
                    alignItems="center" 
                    container 
                    spacing={2}
                    justifyContent="center"
                    sx={{ margin: "0px 25px 10px 30px" }}
                >
                    <ContactCard
                        icon = {<Instagram style={{fontSize:"12vh", fill: "#122620"}} />}
                        name = "Instagram"
                        link = "https://www.instagram.com/ece__club/"
                        at = "@ece__club"
                    />
                    <ContactCard
                        icon = {<Facebook style={{fontSize:"12vh", fill: "#122620"}} />}
                        name = "Facebook"
                        link = "https://www.facebook.com/ECE.Club.UofT/"
                        at = "ECE Club"
                    />
                    <ContactCard
                        icon = {<Mail style={{fontSize:"12vh", fill: "#122620"}} />}
                        name = "E-mail"
                        link = "mailto:ece@g.skule.ca"
                        at = "ece@g.skule.ca"
                    />
            </Grid2>
        </div>

            <div style={{ height: "50px"}} />
            <div>
                <Paper sx={{ height: "55px", position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={10} >
                    <BottomNavigation
                        onChange={(event, value) => goToUrl(value)}
                        style={{ background: '#F4EBD0' }}
                    >
                        <BottomNavigationAction value="https://app.tickettailor.com/events/ececlub/829138" icon={
                            <Typography variant="h3" className="nav-item" style={{ fontSize: "45px", marginBottom: "15px", marginTop: "15px", fontFamily: 'Italiana', color: "#122620", flex: 1 }}>
                                Buy Tickets ➣
                            </Typography>
                        }/>
                    </BottomNavigation>
                </Paper>
                <br />
            </div>
            
        </div>
    )
}

export default DinnerDance