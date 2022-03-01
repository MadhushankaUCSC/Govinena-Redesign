import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import background from "../assets/main_menu_background.jpg";
import wateringImage from '../assets/water-the-soil-of-plants.jpg'
import pestImage from '../assets/pest_image.jpg'

import compostImage from '../assets/make_compost.jpg'

import { Grid } from "@material-ui/core";
import InforCard from './InforCard';

const useStyles = makeStyles({
    root: {
        maxWidth: 310,
        margin: '35px auto',
        height: '100%'

    },
});

const items = [
    {
        id: 1,
        cropImage: compostImage,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        title:"Make Compost" ,
    },
    {
        id: 2,
        cropImage: wateringImage,
        description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        title:" Water Management" ,
    },
    {
        id: 3,
        cropImage: pestImage,
        description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        title:"Pest & Diseases" ,
    },

];
export default function HelpfullInfo() {
    const classes = useStyles();
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        height: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-30px',
        paddingTop: '50px',
        paddingBottom:'50px'

    }
    const headingStyle = { paddingTop: '10px', fontSize: '28px' }
    return (

        <div style={backgroundStyle}>
            <Grid style={{backgroundColor:'rgba(0,0,0,.4)',marginTop:'-40px',paddingTop:'50px',paddingBottom:'80px',marginBottom:'-50px'}}>
                <h1 style={headingStyle}>Helpful Information</h1>
             
                {items.map((list) => (
                <Card className={classes.root} key={list.id}>
                    <InforCard image={list.cropImage} description={list.description} title={list.title} style={{ marginBottom: '50px' }} />
                </Card>
               
                ))}
            </Grid>
        </div>
    );
}
