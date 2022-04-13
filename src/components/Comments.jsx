import React, { useEffect } from 'react';
import { Grid, Paper, Button } from "@material-ui/core";
import background from "../assets/welcome_background.jpg";
import { useNavigate } from "react-router-dom";
import '../App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import userImage1 from "../assets/user1.jpg"
import userImage2 from "../assets/user2.png"

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'; import { useState } from "react";
import { Axios } from 'axios';
export default function Comments() {

    const params = new URLSearchParams(window.location.search);
    const postId = params.get("postId");

    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-30px',
        paddingTop: '50px'

    }
    const headingStyle = { paddingTop: '0px', fontSize: '28px', marginBottom: '0px' }
    const paperStyle = { padding: 10, height: '70vh', width: 280, margin: "60px auto", backgroundColor: 'rgba(255, 255, 255, 0.75)', borderRadius: '10px' }
    const buttonStyle = { width: 'auto', height: 'auto', marginTop: '-6px', borderRadius: '25px' }
    const menuPaperStyle = { padding: '4px', width: 'auto', minWidth: '200px', margin: "10px auto", backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '25px', height: 'auto', paddingBottom: '0px', minHeight: '25px' }

    const [upVote, setUpVote] = useState(0);
    const [downVote, setDownVote] = useState(0);


    const navigate = useNavigate();

    function navigation(url) {
        navigate(url);

    }
    function vote(text) {
        if (text === "upVote") {
            setUpVote(upVote + 1)
        } else {
            setDownVote(downVote - 1)
        }

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

    const getComments = () => {
        Axios.get(`${process.env.REACT_APP_BASE_URL}/getcomments/${postId}`, {
            header: {
                authorization: `Token ${token}`
            }
        }).then((response) => {
//need to get data
        }).catch((error) => {
            console.log("This is the error", error);
        });
    };

    useEffect(() => {
        getComments()
    }, []);

    return (
        <div>
            <div style={backgroundStyle}>
                <Grid style={{ backgroundColor: 'rgba(0,0,0,.4)', marginTop: '-30px', paddingTop: '50px', paddingBottom: '20px', marginBottom: '-50px' }}>

                    <Paper elevation={10} style={paperStyle}>
                        <h1 style={headingStyle}> Comments</h1>
                        <List>
                            <ListItemAvatar>
                                <Avatar src={userImage1} alt="Sharp" />
                            </ListItemAvatar>
                            <Button onClick={() => { navigation('/community') }} style={buttonStyle}>
                                <p style={{ maxWidth: '200px', width: '180px', height: 'auto', color: "rgba(0,0,0,0.8)", fontSize: '10px', marginLeft: '20px', marginBottom: 'auto', marginTop: '-45px', textAlign: 'left', marginRight: '10px' }}>
                                    Ishan karunarathne's post
                                </p>
                            </Button>
                            <div>
                                <ListItem alignItems="flex-start"  >
                                    <ListItemAvatar>
                                        <Avatar src={userImage1} alt="Sharp" />
                                    </ListItemAvatar>
                                    <Paper style={menuPaperStyle}>
                                        {/* <Button onClick={() => { selectCrop('/crops') }} style={buttonStyle}> */}

                                        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: '10px', marginLeft: '10px', marginBottom: '0px', marginTop: '5px', textAlign: 'left' }}>
                                            Lorem Ipsum is simply t jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj .
                                        </p>

                                        {/* </Button> */}
                                    </Paper>

                                </ListItem>
                                <IconButton aria-label="delete" onClick={() => { vote("upVote") }} size="small" style={{ color: 'green', float: 'right', fontSize: '14px', marginTop: '-13px', marginRight: '13px' }}>
                                    <ArrowUpwardIcon fontSize="inherit" />{upVote}
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => { vote("downVote") }} size="small" style={{ color: 'rgb(255, 73, 73)', float: 'right', fontSize: '14px', marginTop: '-13px', marginRight: '3px' }}>
                                    <ArrowDownwardIcon fontSize="inherit" />{downVote}
                                </IconButton>
                                {/* </div> */}
                                <Button color="primary" style={{ fontSize: '10px', color: 'green', float: 'right', margin: '-15px auto' }}>Reply</Button>
                            </div>

                            <div>
                                <ListItem alignItems="flex-start"  >
                                    <ListItemAvatar>
                                        <Avatar src={userImage2} alt="Sharp" />
                                    </ListItemAvatar>
                                    <Paper style={menuPaperStyle}>
                                        {/* <Button onClick={() => { selectCrop('/crops') }} style={buttonStyle}> */}

                                        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: '10px', marginLeft: '10px', marginBottom: '0px', marginTop: '5px', textAlign: 'left' }}>
                                            Lorem Ipsum is simply dummy text .
                                        </p>

                                        {/* </Button> */}
                                    </Paper>

                                </ListItem>
                                <IconButton aria-label="delete" onClick={() => { vote("upVote") }} size="small" style={{ color: 'green', float: 'right', fontSize: '14px', marginTop: '-13px', marginRight: '13px' }}>
                                    <ArrowUpwardIcon fontSize="inherit" />{upVote}
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => { vote("downVote") }} size="small" style={{ color: 'rgb(255, 73, 73)', float: 'right', fontSize: '14px', marginTop: '-13px', marginRight: '3px' }}>
                                    <ArrowDownwardIcon fontSize="inherit" />{downVote}
                                </IconButton>
                                {/* </div> */}
                                <Button color="primary" style={{ fontSize: '10px', color: 'green', float: 'right', margin: '-15px auto' }}>Reply</Button>
                            </div>
                            <div>
                                <ListItem alignItems="flex-start"  >
                                    <ListItemAvatar>
                                        <Avatar src={userImage1} alt="Sharp" />
                                    </ListItemAvatar>
                                    <Paper style={menuPaperStyle}>
                                        {/* <Button onClick={() => { selectCrop('/crops') }} style={buttonStyle}> */}

                                        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: '10px', marginLeft: '10px', marginBottom: '0px', marginTop: '5px', textAlign: 'left' }}>
                                            Lorem Ipsum is simply dummy text .
                                        </p>

                                        {/* </Button> */}
                                    </Paper>

                                </ListItem>
                                <IconButton aria-label="delete" onClick={() => { vote("upVote") }} size="small" style={{ color: 'green', float: 'right', fontSize: '14px', marginTop: '-13px', marginRight: '13px' }}>
                                    <ArrowUpwardIcon fontSize="inherit" />{upVote}
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => { vote("downVote") }} size="small" style={{ color: 'rgb(255, 73, 73)', float: 'right', fontSize: '14px', marginTop: '-13px', marginRight: '3px' }}>
                                    <ArrowDownwardIcon fontSize="inherit" />{downVote}
                                </IconButton>
                                {/* </div> */}
                                <Button color="primary" style={{ fontSize: '10px', color: 'green', float: 'right', margin: '-15px auto' }}>Reply</Button>
                            </div>
                            <div>
                                <ListItem alignItems="flex-start"  >
                                    <ListItemAvatar>
                                        <Avatar src={userImage2} alt="Sharp" />
                                    </ListItemAvatar>
                                    <Paper style={menuPaperStyle}>
                                        {/* <Button onClick={() => { selectCrop('/crops') }} style={buttonStyle}> */}

                                        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: '10px', marginLeft: '10px', marginBottom: '0px', marginTop: '5px', textAlign: 'left' }}>
                                            Lorem Ipsum is simply dummy text .
                                        </p>

                                        {/* </Button> */}
                                    </Paper>

                                </ListItem>
                                <IconButton aria-label="delete" onClick={() => { vote("upVote") }} size="small" style={{ color: 'green', float: 'right', fontSize: '14px', marginTop: '-13px', marginRight: '13px' }}>
                                    <ArrowUpwardIcon fontSize="inherit" />{upVote}
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => { vote("downVote") }} size="small" style={{ color: 'rgb(255, 73, 73)', float: 'right', fontSize: '14px', marginTop: '-13px', marginRight: '3px' }}>
                                    <ArrowDownwardIcon fontSize="inherit" />{downVote}
                                </IconButton>
                                {/* </div> */}
                                <Button color="primary" style={{ fontSize: '10px', color: 'green', float: 'right', margin: '-15px auto' }}>Reply</Button>
                            </div>
                        </List>
                        <IconButton aria-label="delete" onClick={() => { navigation(`/addnewcomment/${postId}`) }} size="small" style={{ color: 'green', float: 'right', fontSize: '35px', marginTop: '70px', marginLeft: '200px' }}>
                            <AddCircleOutlineIcon fontSize="inherit" />
                        </IconButton>
                    </Paper>

                </Grid>
            </div>
        </div>
    )
}

