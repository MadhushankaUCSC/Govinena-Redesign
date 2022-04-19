import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, Grid, Paper } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import background from "../assets/growing_activity.jpg";
import { useNavigate } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Axios from 'axios';

export default function GrowingActivities() {
    const navigate = useNavigate();
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-30px',
        paddingTop: '50px'

    }
    const headingStyle = { paddingTop: '10px', fontSize: '28px', marginBottom: '-20px' }
    const paperStyle = { padding: 10, paddingTop: '50px', height: '60vh', width: 280, margin: "20px auto", backgroundColor: 'rgba(255, 255, 255, 0.75)', borderRadius: '10px' }
    const buttonStyle = { width: '300px' }
    const buttonTextStyle = { textAlign: 'left', fontWeight: 'bolder' }

    const params = new URLSearchParams(window.location.search);
    const cropId = params.get("cropId");
    const varietyId = params.get("varietyId");

    function navigation(url) {
        navigate(url);
    }

    var token = document.cookie
        .split(";")
        .map((cookie) => cookie.split("="))
        .reduce(
            (accumulator, [key, value]) => ({
                ...accumulator,
                [key.trim()]: decodeURIComponent(value),
            }),
            {}
        ).token;

    const getGrowingActivities = () => {
        console.log(cropId, varietyId);
        Axios.get(`${process.env.REACT_APP_BASE_URL}/getgrowingactivities/${cropId}&${varietyId}`, {
            headers: {
                authorization: `Token ${token}`,
            },
        }).then((response) => {
            // need to get data from backend
        }).catch((error) => {
            console.log("This is the Error", error);
        });
    }

    useEffect(() => {
        getGrowingActivities();
    }, []);

    return (
        <div>
            <div style={backgroundStyle}>
                <Grid >
                    <h1 style={headingStyle}>Growing Activities</h1>
                    <h4>Completed : 10%</h4>
                    <Paper elevation={10} style={paperStyle}>


                        <List >
                            <ListItem alignItems="flex-start"  >
                                <Button onClick={() => { navigation('/activitycompletion?activityId=1') }} style={buttonStyle}>
                                    <ListItemText style={buttonTextStyle}
                                        primary="15/02/2022"
                                        secondary={
                                            <Typography style={{ color: "green", fontSize: '12px', marginLeft: '25px' }}>
                                                Water Management
                                            </Typography>

                                        }
                                    />
                                    <ArrowForwardIosIcon style={{ fontSize: "small" }} />
                                </Button>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start"  >
                                <Button onClick={() => { navigation('/activitycompletion') }} style={buttonStyle}>

                                    <ListItemText style={buttonTextStyle}
                                        primary="16/02/2022"
                                        secondary={
                                            <Typography style={{ color: "green", fontSize: '12px', marginLeft: '25px' }}>
                                                Water Management
                                            </Typography>

                                        }
                                    />
                                    <ArrowForwardIosIcon style={{ fontSize: "small" }} />
                                </Button>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start"  >
                                <Button onClick={() => { navigation('/activitycompletion') }} style={buttonStyle}>

                                    <ListItemText style={buttonTextStyle}
                                        primary="17/02/2022"
                                        secondary={
                                            <Typography style={{ color: "green", fontSize: '12px', marginLeft: '25px' }}>
                                                Water Management
                                            </Typography>

                                        }
                                    />
                                    <ArrowForwardIosIcon style={{ fontSize: "small" }} />
                                </Button>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start"  >
                                <Button onClick={() => { navigation('/activitycompletion') }} style={buttonStyle}>

                                    <ListItemText style={buttonTextStyle}
                                        primary="18/02/2022"
                                        secondary={
                                            <Typography style={{ color: "green", fontSize: '12px', marginLeft: '25px' }}>
                                                Water Management
                                            </Typography>

                                        }
                                    />
                                    <ArrowForwardIosIcon style={{ fontSize: "small" }} />
                                </Button>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start"  >
                                <Button onClick={() => { navigation('/activitycompletion') }} style={buttonStyle}>

                                    <ListItemText style={buttonTextStyle}
                                        primary="19/02/2022"
                                        secondary={
                                            <Typography style={{ color: "green", fontSize: '12px', marginLeft: '25px' }}>
                                                Water Management
                                            </Typography>

                                        }

                                    />

                                    <ArrowForwardIosIcon style={{ fontSize: "small" }} />
                                </Button>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}
