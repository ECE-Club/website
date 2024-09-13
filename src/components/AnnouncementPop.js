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
                ECE Common Room Locker Rentals
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
                        <img src="/imgs/event_icons/LockerRental.png" style={{ width: "100px", height: "100px", marginRight: "15px" }} />
                        <div>
                            <div style={{ textAlign: "justify" }}>
                                Need a spot for your stuff? ECE Club is renting lockers in the ECE Common Room (BA1120)! With only 60 lockers available, secure yours ASAP 
                                and share it with friends to save money! <br /> Just bring your own lock (as we won't be keeping your lock combo)🔒
                            </div>
                            <Typography
                                sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                variant="h6"
                                onClick={(event) => {
                                    event.stopPropagation(); 
                                    goToUrl("https://docs.google.com/forms/d/e/1FAIpQLSfe2Fi1T1Sx8RWgKLjzIY1PtfE0xe8pYulswRiAArXemYGvdg/viewform");
                                }}
                            >
                                Sign up today!
                            </Typography>
                            <Typography
                                sx={{ color: "#152a51", margin: "10px 0", overflowWrap: "break-word", textDecoration: 'underline', cursor: 'pointer' }}
                                variant="h6"
                                onClick={(event) => {
                                    event.stopPropagation(); 
                                    goToUrl("https://www.instagram.com/p/C_3dgc0vDrm/?hl=en");
                                }}
                            >
                                Check out our Instagram Post for more info!
                            </Typography>
                        </div>
                    </div>
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

export default AnnouncementPopup;
