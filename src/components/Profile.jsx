import React from 'react';
import background from "../assets/main_menu_background.jpg";
import userImage1 from "../assets/user1.jpg"
import Typography from '@material-ui/core/Typography';

import { Grid, } from "@material-ui/core";
import CompletedActivities from './CompletedActivities';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';

import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);


export default function Profile() {

    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        height: 'auto',
        minHeight: '800px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-30px',
        paddingTop: '50px',
        paddingBottom: '50px',


    }

    const headingStyle = {
        fontSize: '28px', marginTop: '-40px', paddingTop: '100px', paddingBottom: '100px', backgroundImage: `url(${background})`, backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }


    return (

        <div style={backgroundStyle}>
            <Grid style={{ backgroundColor: 'rgba(0,0,0,.4)', marginTop: '-40px', paddingTop: '50px', paddingBottom: '80px', marginBottom: '-50px', minHeight: '800px' }}>
                <h1 style={headingStyle}>Govinena Profile</h1>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src={userImage1} style={{ width: '100px', height: '100px', marginTop: '-60px' }} />
                </StyledBadge>

                <Typography style={{ color: 'white', marginTop: '5px' }} >Ishan Karunarathne</Typography>
                <Typography style={{ color: 'white', marginTop: '5px' }} >0712234565</Typography>

                <CompletedActivities />
            </Grid>
        </div>
    );
}
