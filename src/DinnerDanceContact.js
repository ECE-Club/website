import React from 'react';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';

function ContactCard(props) {

    function goToUrl() {
        window.location.replace(props.link);
    }

    return (
        <Grid2>
            <Card style={{cursor:'pointer'}} onClick={goToUrl} variant="outlined" sx={{ borderRadius: "5px", background: "#F4EBD0" }}> 
                <CardContent>
                    <Grid2 
                        direction="column"
                        alignItems="center" 
                        container 
                        spacing={0.7}
                    >
                        <Grid2 item>
                            {props.icon}
                        </Grid2> 
                        <Grid2 item>  
                            <Typography sx={{ color: "#122620", margin: "auto", fontStyle: "italic"}} variant="h6">
                                {props.name}
                            </Typography>
                        </Grid2>
                        <Grid2 item>
                            <Typography sx={{ color: "#122620", margin: "auto" }} variant="p">
                                {props.at}
                            </Typography>
                        </Grid2>
                        <Grid2 item sx={{width: "190px", textAlign: "center"}} alignItems="center">
                            <Typography align="center" sx={{ fontSize: 18 }} variant="p" color="#122620">
                                {props.info}
                            </Typography> 
                        </Grid2>
                    </Grid2>
                </CardContent>
            </Card>
        </Grid2>
    )

}

export default ContactCard;