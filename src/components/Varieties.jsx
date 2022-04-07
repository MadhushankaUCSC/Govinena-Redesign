import React ,{useEffect}from 'react';
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
import Axios, * as others from 'axios';

export default function Varieties() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const ParamsCropId = params.get("cropId");
  const ParamsCropName = params.get("cropName");
  // console.log(ParamsCropId,ParamsCropName);
  const items = [
    {
      id: 1,
      variety: "Agra",
    },
    {
      id: 2,
      variety: "Parakum",
    },
    {
      id: 3,
      variety: "Rathambala",
    },
    {
      id: 4,
      variety: "Nadee",
    },
    {
      id: 5,
      variety: "Kandula",
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
  const headingStyle = { paddingTop: '10px', fontSize: '28px', marginBottom: '-12px' }
  const paperStyle = { padding: 10, height: 'auto', width: 280, margin: "60px auto", backgroundColor: 'rgba(255, 255, 255, 0.75)', borderRadius: '10px' }
  const buttonStyle = { width: '300px' }
  const buttonTextStyle = { textAlign: 'left', fontWeight: 'bolder' }

const getAllVarieties=async (cropId)=>{
await  Axios.get(`${process.env.Govinena_Base_Url}/variety/${cropId}`,{
    headers: {
          authorization: `Token 12345`,
        },
  }).then((response)=>{



  }).catch((error)=>{
    console.log("This is the error",error);
  });
};

 useEffect(()=>{
  getAllVarieties(ParamsCropId)
 },[]);

  function selectCrop(url) {
    navigate(url);

  }

  return (
    <div>
      <div style={backgroundStyle}>
        <Grid >
          <Paper elevation={10} style={paperStyle}>

            <h1 style={headingStyle}>Varieties</h1>
            <h4>{ParamsCropName}</h4>
            <List >
              {items.map((list) => (
                <div key={list.id}>
                  <ListItem alignItems="flex-start">
                    <Button onClick={() => { selectCrop('/varietysummery'); }} style={buttonStyle}>
                      <ListItemAvatar>
                        <Avatar src={cropImage} alt="Sharp" />
                      </ListItemAvatar>
                      <ListItemText style={buttonTextStyle}
                        primary={<Typography style={{ color: "green", fontSize: '14px', fontWeight: 'bold' }}>{list.variety}</Typography>} />
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
