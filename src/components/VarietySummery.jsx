import React ,{useEffect,useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cropImage from '../assets/banana_image.jpg'
import background from "../assets/main_menu_background.jpg";
import { useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Popup from './Popup';
import  Axios  from 'axios';
const useStyles = makeStyles({
    root: {
        maxWidth: 340,
        margin: '15px auto',
        height: 'auto'

    },
});

export default function VarietySummery() {
    const navigate = useNavigate();

    const params=new URLSearchParams(window.location.search);
    const cropId=params.get("cropId");
    const varietyId=params.get("varietyId");

    const [startDate,setStartDate]=useState("");

    const classes = useStyles();
    const backgroundStyle = {backgroundImage: `url(${background})`,height: '100vh',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',marginTop: '-30px',paddingTop: '50px' }
    const actionStyle={marginLeft:'100px'}
    const headingStyle = { paddingTop: '10px', fontSize: '28px' }
    const buttonStyle = { backgroundColor: 'green', color: 'white', marginTop: '20px', marginBottom: '10px',fontSize:'12px' }
    // var userId = document.cookie
    // .split(';')
    // .map(cookie => cookie.split('='))
    // .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;
    // var token = document.cookie
    // .split(";")
    // .map((cookie) => cookie.split("="))
    // .reduce(
    //   (accumulator, [key, value]) => ({
    //     ...accumulator,
    //     [key.trim()]: decodeURIComponent(value),
    //   }),
    //   {}
    // ).token;
    // const getVarietySummeryDetails = (cropId, varietyId) => {
    //     Axios.get(`${process.env.REACT_APP_BASE_URL}/varietysummery/${cropId}&${varietyId}`, {
    //         headers: {
    //             authorization: `Token ${token}`,
    //         },
    //     }).then((response) => {
    //need to get data from backend
    //     }).catch((error) => {
    //         console.log("This is the Error", error);
    //     });
    // }

    // useEffect(() => {
    //     getVarietySummeryDetails(cropId, varietyId);
    // }, []);

    // const selectedDate = (cropId, varietyId) => {
    //     Axios.post(`${process.env.REACT_APP_BASE_URL}/selectstartdate/${cropId}&${varietyId}`,{
// startDate:startDate,
// userId:userId,
    // }, {
    //         headers: {
    //             authorization: `Token ${token}`,
    //         },
    //     }).then((response) => {

    //     }).catch((error) => {
    //         console.log("This is the Error", error);
    //     });
    // }

    function navigation(url) {
        navigate(url);
    }
    return (

        <div style={backgroundStyle}>
            <Grid >
                <h1 style={headingStyle}>Variety Summery</h1>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="240"
                            image={cropImage}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Agra
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" align='left'>
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                rangingreptiles, with over 6,000 species, rangingreptiles, with over 6,000 species,
                                
                                with over 6,000 species, rangingreptiles, with over 6,000 species, rangingreptiles, with over 6,000 species,
                                rangingreptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={actionStyle}>
                        <Button style={buttonStyle} onClick={()=>{navigation('/community')}}>
                            Community Help
                        </Button>
                        <Popup setStartDate={setStartDate}/>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    );
}
