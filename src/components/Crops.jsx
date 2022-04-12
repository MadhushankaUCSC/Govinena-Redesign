import React, { useEffect } from 'react';
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
import Typography from "@material-ui/core/Typography";
// import Axios from 'axios';
export default function Crops() {
  const items = [
    {
      id: 1,
      crop: "Banana",
      image: cropImage,
    },
    {
      id: 2,
      crop: "Mango",
      image: cropImage,
    },
    {
      id: 3,
      crop: "Papaw",
      image: cropImage,
    },
    {
      id: 4,
      crop: "Beans",
      image: cropImage,
    },
    {
      id: 5,
      crop: "Tomato",
      image: cropImage,
    },
  ];
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
  const paperStyle = { padding: 10, height: 'auto', width: 280, margin: "60px auto", backgroundColor: 'rgba(255, 255, 255, 0.75)', borderRadius: '10px' }
  const buttonStyle = { width: '300px' }
  const buttonTextStyle = { textAlign: 'left', fontWeight: 'bolder' }

  function selectCrop(url) {
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
  const allCrops = () => {
    // Axios.get(`${process.env.REACT_APP_BASE_URL}/crops`,{
    //   headers: {
    //     authorization: `Token ${token}`,
    //   },
    // }).then((response)=>{

    // }).catch((error)=>{

    // });
  }


  useEffect(() => {
    allCrops();
  }, []);

  return (
    <div>
      <div style={backgroundStyle}>
        <Grid >
          <Paper elevation={10} style={paperStyle}>

            <h1 style={headingStyle}>Crops</h1>
            <List >
              {items.map((list) => (
                <div key={list.id}>
                  <ListItem alignItems="flex-start">
                    <Button onClick={() => { selectCrop(`/varieties?cropId=${list.id}&cropName=${list.crop}`) }} style={buttonStyle}>
                      <ListItemAvatar>
                        <Avatar src={cropImage} alt="Sharp" />
                      </ListItemAvatar>
                      <ListItemText style={buttonTextStyle}
                        primary={<Typography style={{ color: "green", fontSize: '14px', fontWeight: 'bold' }}>{list.crop}</Typography>} />
                      <ArrowForwardIosIcon style={{ fontSize: "small" }} />
                    </Button>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </div>
              ))}
            </List>
          </Paper>
        </Grid>
      </div>
    </div>
  )
}
