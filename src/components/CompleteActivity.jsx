import React from 'react';
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import background from "../assets/welcome_background.jpg";
// import { useNavigate } from "react-router-dom";
import '../App.css';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from "@material-ui/core/Typography";
import { Axios } from 'axios';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 220,
        textAlign: 'left'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    input: {
        marginLeft: '20px',
    },
}));

export default function CompleteActivity() {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-30px',
        paddingTop: '50px'

    }
    const classes = useStyles();
    const headingStyle = { paddingTop: '10px', fontSize: '25px', marginBottom: '-12px' }
    const paperStyle = { padding: 10, height: '70vh', width: 280, margin: "60px auto", backgroundColor: 'rgba(255, 255, 255, 0.75)', borderRadius: '10px' }
    const buttonStyle = { backgroundColor: 'green', color: 'white', marginTop: '10px', marginBottom: '5px', fontSize: '12px', height: '25px' }
    const inputStyle = { width: '80%', marginTop: '60px', paddingBottom: '15px', color: 'green' }

    const [activityStatus, setActivityStatus] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [attachment, setAttachment] = React.useState('');
    const [errorMsg, setErrorMsg] = React.useState('');

    const handleChange = (event) => {
        setActivityStatus(event.target.value);
    };

    // const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const activityId = params.get("activityId");

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

    const saveActivityStatus = (e) => {
        e.preventDefault();
        // console.log(attachment.name,value);
        if (description == '' || activityStatus == '') {
            setErrorMsg("Please Fill the  Required Field")
        }
        Axios.post(`${process.env.REACT_APP_BASE_URL}/activitystatus/${activityId}`, {
            description: description,
            attachment: attachment.name,
            status: activityStatus,
        }, {
            header: {
                authorization: `Token ${token}`
            }
        }).then((response) => {

        }).catch((error) => {
            console.log("This is the error", error);
        })
    }

    return (
        <div>
            <div style={backgroundStyle}>
                <Grid style={{ backgroundColor: 'rgba(0,0,0,.4)', marginTop: '-30px', paddingTop: '50px', paddingBottom: '80px', marginBottom: '-50px' }}>
                    <Paper elevation={10} style={paperStyle}>

                        <h3 style={headingStyle}>Activity Completion</h3>

                        <div>
                            <Typography style={{ color: 'red', fontSize: '10px', marginTop: '30px', marginBottom: '-40px' }}>
                                {errorMsg}
                            </Typography>
                            <TextField
                                style={inputStyle}
                                label='Description'
                                multiline
                                maxRows={3}
                                id="mui-theme-provider-standard-input"
                                fullWidth required
                                onChange={(e) => { setDescription(e.target.value) }}
                            />
                            <FormLabel component="legend" className={classes.formControl} style={{ marginLeft: '25px' }}>Status *</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={activityStatus} onChange={handleChange} style={{ marginLeft: '35px' }}>
                                <FormControlLabel value="Complete" control={<Radio />} label={<Typography style={{ fontSize: '12px' }}>Complete</Typography>} />
                                <FormControlLabel value="Dismiss" control={<Radio />} label={<Typography style={{ fontSize: '12px' }}>Dismiss</Typography>} />

                            </RadioGroup>

                            <FormControl className={classes.formControl}>
                                <input style={{ opacity: 1, position: 'relative', top: '25px' }}
                                    accept=".png,.gif,.pdf,.jpg"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={(e) => { setAttachment(e.target.files[0]) }}

                                />
                                <label htmlFor="contained-button-file">
                                    <Button style={{ width: '90px', height: '28px', marginLeft: '20px', fontSize: '10px' }} variant="contained" color="primary" component="span" size='small'>
                                        Upload
                                    </Button>
                                </label>
                            </FormControl>


                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <Button fullWidth style={buttonStyle} onClick={(e) => { saveActivityStatus(e) }}>
                                save
                            </Button>
                            <Button style={buttonStyle} fullWidth>
                                Community Help
                            </Button>
                        </div>
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}

