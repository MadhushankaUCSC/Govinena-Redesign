import React from 'react';
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

import { Grid } from "@material-ui/core";
import Popup from './Popup';

const useStyles = makeStyles({
    root: {
        maxWidth: 340,
        margin: '15px auto',
        height: 'auto'

    },
});

export default function VarietySummery() {
    const classes = useStyles();
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-30px',
        paddingTop: '50px'

    }
const actionStyle={marginLeft:'100px'}
    const headingStyle = { paddingTop: '10px', fontSize: '28px' }
    const buttonStyle = { backgroundColor: 'green', color: 'white', marginTop: '20px', marginBottom: '10px',fontSize:'12px' }
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
                        <Button style={buttonStyle}>
                            Community Help
                        </Button>
                        <Popup/>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    );
}
