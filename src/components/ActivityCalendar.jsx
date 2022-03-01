import React from 'react';
import {  Grid, Paper } from "@material-ui/core";
import background from "../assets/welcome_background.jpg";
// import { useNavigate } from "react-router-dom";
import '../App.css';

export default function ActivityCalendar() {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-30px',
        paddingTop: '50px'

    }
    const headingStyle = { paddingTop: '10px', fontSize: '28px', marginBottom: '-12px' }
    const paperStyle = { padding: 10, height: '70vh', width: 280, margin: "60px auto", backgroundColor: 'rgba(255, 255, 255, 0.75)', borderRadius: '10px' }
  


    // const navigate = useNavigate();

    // //   function selectCrop(url) {
    // //     navigate(url);

    // //   }

    return (
        <div>
            <div style={backgroundStyle}>
                <Grid style={{ backgroundColor: 'rgba(0,0,0,.4)', marginTop: '-30px', paddingTop: '50px', paddingBottom: '80px', marginBottom: '-50px' }}>
                    <Paper elevation={10} style={paperStyle}>

                        <h1 style={headingStyle}> Comments</h1>

                       
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}

