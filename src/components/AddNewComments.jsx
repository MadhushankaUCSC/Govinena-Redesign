import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import background from "../assets/welcome_background.jpg";
import { useNavigate } from "react-router-dom";
import '../App.css';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
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

export default function AddNewComments() {
    const classes = useStyles();
    const navigate = useNavigate();

    const backgroundStyle = { backgroundImage: `url(${background})`, height: '100vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginTop: '-30px', paddingTop: '50px' }
    const headingStyle = { paddingTop: '10px', fontSize: '25px', marginBottom: '-12px' }
    const paperStyle = { padding: '10px', height: '70vh', width: 280, margin: "60px auto", backgroundColor: 'rgba(255, 255, 255, 0.75)', borderRadius: '10px' }
    const buttonStyle = { backgroundColor: 'green', color: 'white', marginTop: '10px', marginBottom: '10px', fontSize: '12px', height: '25px' }
    const inputStyle = { width: '80%', marginTop: '70px', paddingBottom: '15px', color: 'green' }

    var userId = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;

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

    const params = new URLSearchParams(window.location.search);
    const postId = params.get("postID");

    const [description, setDescription] = useState("");
    const [attachment, setAttachment] = useState("");
    const [descriptionErrorMsg, setDescriptionErrorMsg] = useState("");
    const [responseErrorMsg, setResponseErrorMsg] = useState("");


    const descriptionOfComment = (description) => {
        setDescription(description);
        setDescriptionErrorMsg("");
    }


    const createNewComment = (e) => {
        e.preventDefault();
        if (description == "") {
            setDescriptionErrorMsg("Please Enter description")
        } else {
            Axios.post(`${process.env.REACT_APP_BASE_URL}/createnewcomment/${postId}`, {
                comment: description,
                attachment: attachment.name,
                userId: userId,
            }, {
                header: {
                    authorization: `Token ${token}`
                },
            }).then((response) => {
                //need to get response from the backend
                if (response.status === 200) {
                    navigate(`/postcomments?postID=${postId}`)
                } else {

                    // navigate('/addnewcomment');
                    setResponseErrorMsg("Something went wrong")
                }

            }).catch((error) => {
                console.log("This is the error", error);
            });
        }

    };

    function navigation(url) {
        navigate(url);
    }
    return (
        <div>
            <div style={backgroundStyle}>
                <Grid style={{ backgroundColor: 'rgba(0,0,0,.4)', marginTop: '-30px', paddingTop: '50px', paddingBottom: '80px', marginBottom: '-50px' }}>
                    <Paper elevation={10} style={paperStyle}>

                        <h3 style={headingStyle}>New Comment</h3>
                        <Typography style={{ color: 'red', fontSize: '12px' }}>
                            {responseErrorMsg}
                        </Typography>
                        <div>
                            <TextField
                                style={inputStyle}
                                label='Comment'
                                multiline
                                maxRows={4}
                                id="mui-theme-provider-standard-input"
                                onChange={(e) => { descriptionOfComment(e.target.value) }}
                                fullWidth required
                            />

                            <Typography style={{ color: 'red', fontSize: '10px' }}>
                                {descriptionErrorMsg}
                            </Typography>
                            <FormControl className={classes.formControl}>
                                <input style={{ opacity: 1, position: 'relative', top: '25px' }}
                                    accept=".png,.gif,.pdf,.jpg"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    onChange={(e) => { setAttachment(e.target.file[0]) }}
                                    type="file"
                                />
                                <label htmlFor="contained-button-file">
                                    <Button style={{ width: '90px', height: '28px', marginLeft: '20px' }} variant="contained" color="primary" component="span" size='small'>
                                        Upload
                                    </Button>
                                </label>
                            </FormControl>

                        </div>
                        <div style={{ marginTop: '150px' }}>
                            <Button onClick={() => { navigation(`/postcomments?postID=${postId}`) }}>
                                Cancel
                            </Button>
                            <Button style={buttonStyle} onClick={(e) => { createNewComment(e) }}>
                                publish
                            </Button>
                        </div>
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}

