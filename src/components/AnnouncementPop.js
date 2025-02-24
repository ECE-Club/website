import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function goToUrl(url) {
    window.open(url);
}

const AnnouncementPopup = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const hasSeenPopup = sessionStorage.getItem('seenAnnouncement');
        if (!hasSeenPopup) {
            setOpen(true);
            sessionStorage.setItem('seenAnnouncement', 'true');
        }
    }, []);

    const handleClose = (event) => {
        event.stopPropagation();
        setOpen(false);
    };

    const handleVisitAnnouncement = () => {
        setOpen(false);
        window.location.href = '/events';
    };

    return (
        <Dialog open={open} onClose={handleClose}
            PaperProps={{
                sx: { 
                    position: "absolute", 
                    top: 16, 
                    right: 16, 
                    m: 0, 
                    borderRadius: 2, 
                    width: {
                        xs: '90%', 
                        sm: '80%', 
                        md: '60%', 
                        lg: '50%', 
                        xl: '40%'
                    },
                    maxWidth: '80%',
                    cursor: 'pointer',
                }
            }}
        >
            <DialogTitle sx={{ display: 'flex', fontWeight: 'bold', justifyContent: 'space-between', alignItems: 'center' }}>
                ECE Club Merch
                <IconButton 
                    edge="end" 
                    color="inherit" 
                    onClick={(event) => {
                        event.stopPropagation();
                        handleClose(event); 
                    }} 
                    aria-label="close"
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent onClick={handleVisitAnnouncement}>
                <Typography sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word" }} variant="h6">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src="/imgs/event_icons/ECEDinnerDanceVenue.png" style={{ width: "23%", maxWidth: "170px", height: "auto", marginRight: "15px" }} />
                        <div>
                            <div style={{ textAlign: "justify" }}>
                                <b>Mark your calendars: February 14th, 2025! </b> This year, we're hosting our event at the stunning <u> Chateau Le Jardin</u> in Woodbridge, ON 
                                that can accommodate up to 400 guests. Tickets will include a 3-course meal, an open bar🥂, a DJ + music 🎶, and a photobooth to capture all the memories. <br/> <b>Hurry before they're sold out! 💃</b>
                            </div>
                            <Typography
                                sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                variant="h6"
                                onClick={(event) => {
                                    event.stopPropagation(); 
                                    goToUrl("https://www.tickettailor.com/events/ececlub/1523837");
                                }}
                            >
                                Get your tickets today!
                            </Typography>
                            <Typography
                                sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                variant="h6"
                                onClick={(event) => {
                                    event.stopPropagation(); 
                                    goToUrl("https://www.instagram.com/p/DEi2AE7vP61/?hl=en");
                                }}
                            >
                                Check out our Instagram for more info!
                            </Typography>
                        </div>
                    </div>
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

export default AnnouncementPopup;
