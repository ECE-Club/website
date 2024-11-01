import React from 'react';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogTitle } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Zoom } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});
  
function TeamCard(props) {

    const [dialog, setDialog] = React.useState(false)

    const contactElements = props.contact.map((contact) =>
        <div>
            <Typography sx={{fontSize: 18}} variant="p" color="#152a51">
                {contact}
            </Typography> 
            <br />
        </div>
    )

    let name;

    if(props.name.length>17){
        name = props.name.substring(0, 17);
        name += "...";
    }
    else{
        name = props.name;
    }

    return (
        <div>
            <Dialog TransitionComponent={Transition} onClose={() => setDialog(false)} open={dialog}>
                <DialogTitle>
                    {contactElements}
                </DialogTitle>
            </Dialog>
            <Card variant="elevated" sx={{ width: "250px", borderRadius:"10px", background: "white"}}>
                <CardMedia
                      component="img"
                      image={props.picture}
                      height="250px"
                />
                <CardContent sx={{width: "35vh"}}>
                    <Typography sx={{fontSize: 22}} variant="p" color="#152a51">
                        {name}
                    </Typography> 
                    <Typography sx={{marginLeft: "-1px", fontSize: 18, fontStyle: "italic"}} variant="h6" color="#152a51">
                        {props.year}
                    </Typography>
                    <Typography sx={{fontSize: 24, height: 48}} variant="h6" color="#152a51">
                        {props.role} 
                    </Typography> 
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => setDialog(true)} sx={{':hover': { backgroundColor: '#050050'}, margin: "20px auto 10px auto", backgroundColor:"#152a51"}}>
                        <Typography color="white">
                            CONTACT
                        </Typography> 
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default TeamCard;
