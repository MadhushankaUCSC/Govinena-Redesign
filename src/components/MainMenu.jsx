import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Button, Grid, Paper } from "@material-ui/core";
import background from "../assets/main_menu_background.jpg";
import cropImage from "../assets/crop_image.png"
import calendarImage from "../assets/calendar.png"
import communityImage from "../assets/community.png"
import listImage from "../assets/list.png"
import weatherImage from "../assets/weather.png"
import { useNavigate } from "react-router-dom";

export default function MainMenu() {
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
    const headingStyle = { paddingTop: '10px', fontSize: '28px' }
    // const paperStyle = { padding: 10, height: '70vh', width: 280, margin: "60px auto", backgroundColor: 'rgba(255, 255, 255, 0.75)', borderRadius: '10px' }
    const menuPaperStyle = { padding: 2, height: '6.5vh', width: 260, margin: "5px auto", backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '15px' }

    const buttonStyle = { width: 255, height: '2.3hv', marginTop: '-6px', borderRadius: '15px' }
    const buttonTextStyle = { textAlign: 'left', fontWeight: 'bolder', color: 'rgba(255, 255, 255, 0.75)', fontSize: '18px' }

    function selectCrop(url) {
      
        navigate(url);
    }

    return (
        <div>
            <div style={backgroundStyle}>
                <Grid >
                    {/* <Paper elevation={10} style={paperStyle}> */}

                    <h1 style={headingStyle}>Govinena Menu</h1>
                    <List >

                        <ListItem alignItems="flex-start"  >
                            <Paper style={menuPaperStyle}>
                                <Button onClick={() => { selectCrop('/crops') }} style={buttonStyle}>
                                    <ListItemAvatar>
                                        <Avatar src={cropImage} alt="Sharp" />
                                    </ListItemAvatar>
                                    <ListItemText style={buttonTextStyle}
                                        primary="Crops"

                                    />

                                </Button>
                            </Paper>
                        </ListItem>


                        <ListItem alignItems="flex-start"  >
                            <Paper style={menuPaperStyle}>
                                <Button onClick={() => { selectCrop('/growingcalendar') }} style={buttonStyle}>
                                    <ListItemAvatar>
                                        <Avatar src={calendarImage} alt="Sharp" />
                                    </ListItemAvatar>
                                    <ListItemText style={buttonTextStyle}
                                        primary="Growing Calendar"

                                    />

                                </Button>
                            </Paper>
                        </ListItem>


                        <ListItem alignItems="flex-start"  >
                            <Paper style={menuPaperStyle}>
                                <Button onClick={() => { selectCrop('/growlist') }} style={buttonStyle}>
                                    <ListItemAvatar>
                                        <Avatar src={listImage} alt="Sharp" />
                                    </ListItemAvatar>
                                    <ListItemText style={buttonTextStyle}
                                        primary="Growing Activities"

                                    />

                                </Button>
                            </Paper>
                        </ListItem>


                        <ListItem alignItems="flex-start"  >
                            <Paper style={menuPaperStyle}>
                                <Button onClick={() => { selectCrop('/weather') }} style={buttonStyle}>
                                    <ListItemAvatar>
                                        <Avatar src={weatherImage} alt="Sharp" />
                                    </ListItemAvatar>
                                    <ListItemText style={buttonTextStyle}
                                        primary="Weather"

                                    />

                                </Button>
                            </Paper>
                        </ListItem>


                        <ListItem alignItems="flex-start"  >
                            <Paper style={menuPaperStyle}>
                                <Button onClick={() => { selectCrop('/community') }} style={buttonStyle}>
                                    <ListItemAvatar>
                                        <Avatar src={communityImage} alt="Sharp" />
                                    </ListItemAvatar>
                                    <ListItemText style={buttonTextStyle}
                                        primary="Community"

                                    />

                                </Button>
                            </Paper>
                        </ListItem>

                    </List>
                    {/* </Paper> */}
                </Grid>
            </div>
        </div>
    )
}
