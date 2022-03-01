import React from 'react';
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import background from "../assets/welcome_background.jpg";
// import { useNavigate } from "react-router-dom";
import '../App.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 220,
        textAlign: 'left'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    input: {
        marginLeft: '20px',
    },
}));

export default function PostCreate() {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-30px',
        paddingTop: '50px'

    }
    const classes = useStyles();
    const headingStyle = { paddingTop: '10px', fontSize: '25px', marginBottom: '-12px' }
    const paperStyle = { padding: 10, height: '70vh', width: 280, margin: "60px auto", backgroundColor: 'rgba(255, 255, 255, 0.75)', borderRadius: '10px' }
    const buttonStyle = { backgroundColor: 'green', color: 'white', marginTop: '10px', marginBottom: '10px', fontSize: '12px', height: '25px' }
    const inputStyle = { width: '80%', marginTop: '70px', paddingBottom: '15px', color: 'green' }

    const [tag, setTag] = React.useState('');

    const handleChange = (event) => {
        setTag(event.target.value);
    };

    // const navigate = useNavigate();

    // //   function selectCrop(url) {
    // //     navigate(url);

    // //   }

    return (
        <div>
            <div style={backgroundStyle}>
                <Grid style={{ backgroundColor: 'rgba(0,0,0,.4)', marginTop: '-30px', paddingTop: '50px', paddingBottom: '80px', marginBottom: '-50px' }}>
                    <Paper elevation={10} style={paperStyle}>

                        <h3 style={headingStyle}>New Post</h3>

                        <div>
                            <TextField
                                style={inputStyle}
                                label='Description'
                                multiline
                                maxRows={4}
                                id="mui-theme-provider-standard-input"
                                fullWidth required
                            />


                            <FormControl className={classes.formControl}>
                                <input style={{ opacity: 1, position: 'relative', top: '25px' }}
                                    accept=".png,.gif,.pdf,.jpg"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="contained-button-file">
                                    <Button style={{ width: '90px', height: '28px', marginLeft: '20px' }} variant="contained" color="primary" component="span" size='small'>
                                        Upload
                                    </Button>
                                </label>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Tag *</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={tag}
                                    onChange={handleChange}
                                    fullWidth required
                                >
                                    <MenuItem value={10}>pest</MenuItem>
                                    <MenuItem value={20}>Diseases</MenuItem>
                                    <MenuItem value={30}>Irrigation</MenuItem>
                                </Select>
                            </FormControl>

                        </div>
                        <div style={{ marginTop: '150px' }}>
                            <Button>
                                Cancel
                            </Button>
                            <Button style={buttonStyle}>
                                publish
                            </Button>
                        </div>
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}

