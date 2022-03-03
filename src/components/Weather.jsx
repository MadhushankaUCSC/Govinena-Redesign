import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Grid, Paper } from "@material-ui/core";

import background from "../assets/weather.jpg";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <h2>{children}</h2>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(0,0,0,0)',

        width: '100%',
        margin: '0px auto'
    },
}));

export default function Weather() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-30px',
        paddingTop: '50px'

    }

    const paperStyle = { padding: 10, paddingTop: '50px', height: '60vh', width: 280, margin: "30px auto", backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px' }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (
        <div style={backgroundStyle}>
            <Grid style={{ backgroundColor: 'rgba(0,0,0,.4)', marginTop: '-40px', paddingTop: '20px', paddingBottom: '80px', marginBottom: '-40px', Height: '100%' }}>
                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Weather" {...a11yProps(0)} style={{ backgroundColor: 'rgba(0,0,0,0.8)', color: 'white' }} />
                            <Tab label="Weather Summary" {...a11yProps(1)} style={{ backgroundColor: 'rgba(0,0,0,0.8)', color: 'white' }} />
                            <Tab label="Next 5 Days" {...a11yProps(2)} style={{ backgroundColor: 'rgba(0,0,0,0.8)', color: 'white' }} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            Weather
                            <Paper elevation={10} style={paperStyle}></Paper>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            Weather Summary
                            <Paper elevation={10} style={paperStyle}></Paper>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            Next 5 Days Weather
                            <Paper elevation={10} style={paperStyle}></Paper>
                        </TabPanel>
                    </SwipeableViews>
                </div>
            </Grid >
        </div>
    );
}
