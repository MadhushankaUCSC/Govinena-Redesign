import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import background from "../assets/main_menu_background.jpg";
import wateringImage from '../assets/water-the-soil-of-plants.jpg'
import pestImage from '../assets/pest_image.jpg'
import userImage1 from "../assets/user1.jpg"
import userImage2 from "../assets/user2.png"
import compostImage from '../assets/make_compost.jpg'

import { Grid, Button } from "@material-ui/core";
import SinglePostCard from './SinglePostCard';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import { useNavigate } from "react-router-dom";
import Axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 310,
        margin: '35px auto',
        height: '100%'

    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 150,
        textAlign: 'left',
        marginTop: '-100px',
        marginLeft: '-10px'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    input: {
        marginLeft: '20px',
    },
}));

const items = [
    {
        postId: 'P1',
        cropImage: compostImage,
        userImage: userImage1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        userName: "Ishan Karunarathne",
        userID:1,
        tag:"pest",
    },
    {
        postId: 'P2',
        cropImage: wateringImage,
        userImage: userImage2,
        description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        userName: "Malsha Nayomi",
        userID:2,
        tag:"Diseases",
    },
    {
        postId: 'P3',
        cropImage: pestImage,
        userImage: userImage1,
        description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        userName: "Kasun Karunarathne",
        userID:3,
        tag:"Irrigation",
    },

];
export default function Community() {
    const classes = useStyles();


    const navigate = useNavigate();

    function navigation(url) {
        navigate(url);
    }
    const backgroundStyle = { backgroundImage: `url(${background})`, height: 'auto', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginTop: '-30px', paddingTop: '50px', paddingBottom: '50px' }
    const headingStyle = { fontSize: '28px', marginTop: '-40px', paddingTop: '100px', paddingBottom: '100px', backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }
    const buttonStyle = { backgroundColor: 'green', color: 'white', marginTop: '-125px', marginBottom: '15px', fontSize: '12px', height: '25px', marginLeft: '70px' }

    const [tag, setTag] = React.useState(0);

   
        // console.log(tag);
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

    const getAllPosts = () => {
        Axios.get(`${process.env.REACT_APP_BASE_URL}/community`, {
            header: {
                authorization: `Token ${token}`
            },
        }).then((response) => {
//need to get data from the backend
        }).catch((error) => {
            console.log("This is the error", error);
        });
    };

    // useEffect(() => {
    //     getAllPosts()
    // }, []);

    
    return (

        <div style={backgroundStyle}>
            <Grid style={{ backgroundColor: 'rgba(0,0,0,.4)', marginTop: '-40px', paddingTop: '50px', paddingBottom: '80px', marginBottom: '-50px' }}>
                <h1 style={headingStyle}>Govinena Community</h1>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label" style={{ color: 'white', fontSize: '15px', fontWeight: 'bold' }}>Filter</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={0}
                    
                        onChange={(e)=>{setTag(e.target.value)}}

                    ><MenuItem selected value={0}>All</MenuItem>
                        <MenuItem value={10}>pest</MenuItem>
                        <MenuItem value={20}>Diseases</MenuItem>
                        <MenuItem value={30}>Irrigation</MenuItem>
                    </Select>

                </FormControl>
                <Button style={buttonStyle} onClick={() => { navigation('/createpost') }}>
                    Add New Post
                </Button>
                {items.map((list) => (
                    <Card className={classes.root} key={list.postId}>
                        <SinglePostCard userID={list.userID} userImage={list.userImage} postId={list.postId} image={list.cropImage} description={list.description} userName={list.userName} style={{ marginBottom: '50px' }} />
                    </Card>
                    
                ))}
            </Grid>
        </div>
    );
}
