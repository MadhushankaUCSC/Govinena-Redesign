import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Button, Grid, Paper } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import background from "../assets/welcome_background.jpg";
import cropImage from "../assets/crop_image.png"
import { useNavigate } from "react-router-dom";
import '../App.css';
import Typography from "@material-ui/core/Typography";

export default function Varieties() {
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
  const buttonStyle = { width: '300px' }
  const buttonTextStyle = { textAlign: 'left', fontWeight: 'bolder' }


  const navigate = useNavigate();

  function selectCrop(url) {
    navigate(url);

  }

  return (
    <div>
      <div style={backgroundStyle}>
        <Grid >
          <Paper elevation={10} style={paperStyle}>

            <h1 style={headingStyle}>Varieties</h1>
            <h4>Banana</h4>
            <List >
              <ListItem alignItems="flex-start"  >
                <Button onClick={() => { selectCrop('/varietysummery') }} style={buttonStyle} >
                  <ListItemAvatar>
                    <Avatar src={cropImage} alt="Sharp" />
                  </ListItemAvatar>
                  <ListItemText style={buttonTextStyle}
                    primary={<Typography style={{ color: "green", fontSize: '14px',fontWeight: 'bold'}}>Agra</Typography>}

                  />
                  <ArrowForwardIosIcon style={{fontSize:"small"}}/>
                </Button>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start"  >
                <Button onClick={() => { selectCrop('/varietysummery') }} style={buttonStyle}>
                  <ListItemAvatar>
                    <Avatar src={cropImage} alt="Sharp" />
                  </ListItemAvatar>
                  <ListItemText style={buttonTextStyle}
                    primary={<Typography style={{ color: "green", fontSize: '14px',fontWeight: 'bold'}}>Parakum</Typography>}

                  />
                  <ArrowForwardIosIcon style={{fontSize:"small"}}/>
                </Button>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start"  >
                <Button onClick={() => { selectCrop('/varietysummery') }} style={buttonStyle}>
                  <ListItemAvatar>
                    <Avatar src={cropImage} alt="Sharp" />
                  </ListItemAvatar>
                  <ListItemText style={buttonTextStyle}
                    primary={<Typography style={{ color: "green", fontSize: '14px',fontWeight: 'bold'}}>Rathambala</Typography>}

                  />
                  <ArrowForwardIosIcon style={{fontSize:"small"}}/>
                </Button>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start"  >
                <Button onClick={() => { selectCrop('/varietysummery') }} style={buttonStyle}>
                  <ListItemAvatar>
                    <Avatar src={cropImage} alt="Sharp" />
                  </ListItemAvatar>
                  <ListItemText style={buttonTextStyle}
                    primary={<Typography style={{ color: "green", fontSize: '14px',fontWeight: 'bold'}}>Nadee</Typography>}

                  />
                  <ArrowForwardIosIcon style={{fontSize:"small"}}/>
                </Button>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start"  >
                <Button onClick={() => { selectCrop('/varietysummery') }} style={buttonStyle}>
                  <ListItemAvatar>
                    <Avatar src={cropImage} alt="Sharp" />
                  </ListItemAvatar>
                  <ListItemText style={buttonTextStyle}
                    primary={<Typography style={{ color: "green", fontSize: '14px',fontWeight: 'bold'}}>Kandula</Typography>}

                  />
                  <ArrowForwardIosIcon style={{fontSize:"small"}}/>
                </Button>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </div>
    </div>
  )
}
