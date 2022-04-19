import React, { useEffect } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Button, Grid, Paper } from "@material-ui/core";
import background from "../assets/main_menu_background.jpg";
import cropImage from "../assets/crop_image.png"
import { useNavigate } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import DeleteConfirmation from './DeleteConfirmation';
import Axios from 'axios';
export default function GrowList() {

    const navigate = useNavigate();

    const items = [
        {   growListId:1,
            cropId: 'c1',
            crop: "Banana",
            varietyId: 'v1',
            variety: "Parakum",
            image: cropImage,
        },
        {
            growListId:2,
            cropId: 'c2',
            crop: "Banana",
            varietyId: 'v2',
            variety: "Nadee",
            image: cropImage,
        },
        {
            growListId:3,
            cropId: 'c3',
            crop: "Banana",
            varietyId: 'v3',
            variety: "Agra",
            image: cropImage,
        },
        {
            growListId:4,
            cropId: 'c4',
            crop: "Banana",
            varietyId: 'v4',
            variety: "Rathambala",
            image: cropImage,
        },
        {
            growListId:5,
            cropId: 'c5',
            crop: "Banana",
            varietyId: 'v5',
            variety: "Amban",
            image: cropImage,
        },
    ];
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-30px',
        paddingTop: '50px'

    }


    const headingStyle = { paddingTop: '10px', fontSize: '28px' }
    const menuPaperStyle = { padding: 5, height: '6.5vh', width: 260, margin: "2px auto", backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '15px' }
    const buttonStyle = { width: 230, height: '2.3hv', marginTop: '-7px', borderRadius: '15px' }
    const buttonTextStyle = { textAlign: 'left', fontWeight: 'bolder', color: 'rgba(255, 255, 255, 0.75)', fontSize: '18px' }
    const [confirm, setConfirm] = React.useState(false);

    function navigation(url) {
        navigate(url);
    }
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

    const getGrowList = async () => {

        await Axios.get(`${process.env.REACT_APP_BASE_URL}/growlist/${userId}`, {
            header: {
                authorization: `Token ${token}`
            }
        }).then((response) => {

        }).catch((error) => {
            console.log("This is the error", error);
        });
    }

    // useEffect(() => {
    //    getGrowList()
    // }, []);

    return (
        <div>
            <div style={backgroundStyle}>
                <Grid >

                    <h1 style={headingStyle}>Grow List</h1>
                    <List >

                        {items.map((list) => (
                            <ListItem alignItems="flex-start" key={list.growListId} >
                                <Paper style={menuPaperStyle}>
                                    <Button onClick={() => { navigation(`/growingactivities?cropId=${list.cropId}&varietyId=${list.varietyId}`) }} style={buttonStyle}>
                                        <ListItemAvatar>
                                            <Avatar src={list.image} alt="Sharp" />
                                        </ListItemAvatar>
                                        <ListItemText style={buttonTextStyle}
                                            primary={<Typography style={{ color: "white", fontSize: '14px' }}>{list.variety}</Typography>}
                                            secondary={<Typography style={{ color: "lightgreen", fontSize: '11px' }}>{list.crop}</Typography>}
                                        />
                                    </Button>

                                    <DeleteConfirmation id={list.growListId} isOpen={true} setConfirm={setConfirm} position={'growList'} />
                                </Paper>
                            </ListItem>

                        ))}

                    </List>

                </Grid>
            </div>
        </div>
    )
}
