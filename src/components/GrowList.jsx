import React from 'react'
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
export default function GrowList() {

    const navigate = useNavigate();

    const items = [
        {
            id: 1,
            crop: "Banana",
            variety: "Parakum",
            image: cropImage,
        },
        {
            id: 2,
            crop: "Banana",
            variety: "Nadee",
            image: cropImage,
        },
        {
            id: 3,
            crop: "Banana",
            variety: "Agra",
            image: cropImage,
        },
        {
            id: 4,
            crop: "Banana",
            variety: "Rathambala",
            image: cropImage,
        },
        {
            id: 5,
            crop: "Banana",
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

    function selectCrop(url) {
        navigate(url);
    }

    return (
        <div>
            <div style={backgroundStyle}>
                <Grid >

                    <h1 style={headingStyle}>Grow List</h1>
                    <List >

                        {items.map((list) => (
                            <ListItem alignItems="flex-start" key={list.id} >
                                <Paper style={menuPaperStyle}>
                                    <Button onClick={() => { selectCrop('/growingactivities') }} style={buttonStyle}>
                                        <ListItemAvatar>
                                            <Avatar src={list.image} alt="Sharp" />
                                        </ListItemAvatar>
                                        <ListItemText style={buttonTextStyle}
                                            primary={<Typography style={{ color: "white", fontSize: '14px' }}>{list.variety}</Typography>}
                                            secondary={<Typography style={{ color: "lightgreen", fontSize: '11px' }}>{list.crop}</Typography>}
                                        />
                                    </Button>
                                    <DeleteConfirmation />
                                </Paper>
                            </ListItem>

                        ))}

                    </List>

                </Grid>
            </div>
        </div>
    )
}
