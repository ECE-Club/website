import React from 'react';
import { Instagram } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { SmartToy } from '@mui/icons-material';
import { Mail } from '@mui/icons-material';
import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import { Paper } from '@mui/material';

function Footer() {

    function goToUrl(url) {
        window.location.replace(url);
    }

    return (
        <div>
            <Paper sx={{ height: "55px", position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={10} >
                <BottomNavigation
                    onChange={(event, value) => goToUrl(value)}
                    style={{ background: '#152a51' }}
                >
                    <BottomNavigationAction value="https://www.instagram.com/ece__club/" icon={<Instagram style={{fontSize:"5vh", fill: "white"}} />} />
                    <BottomNavigationAction value="https://discord.gg/rhawdWcJR5" icon={<SmartToy style={{fontSize:"5vh", fill: "white"}} />} />
                    <BottomNavigationAction value="mailto:ececlub@ecf.utoronto.ca" icon={<Mail style={{fontSize:"5vh", fill: "white"}} />} />
                </BottomNavigation>
            </Paper>
            <br />
        </div>
    )

}

export default Footer;
