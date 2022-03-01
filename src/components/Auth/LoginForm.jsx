import React from "react";
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from "@material-ui/core";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import background from "../../assets/login_background.jpg";
import {ThemeProvider,createTheme} from '@material-ui/core/styles';

export default function LoginForm() {
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "60px auto", backgroundColor: 'rgba(255, 255, 255, 0.75)',borderRadius: '10px' }
  const avatarStyle = { backgroundColor: 'green' }
  const buttonStyle = { backgroundColor: 'green', color: 'white', marginTop: '60px', marginBottom: '30px' }
  const inputStyle = { width: '80%', marginTop: '70px', paddingBottom: '15px' }
  const backgroundStyle = {  /* The image used */
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundHeight: '800px',
    paddingTop: '60px',
    paddingBottom: '10%',
    width: '100%',
    height: '20%',
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1b5e20',
      },
    },
  });


 
  return (
    <div style={backgroundStyle}>
      <Grid >
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>

            <h2>Sign In <Avatar style={avatarStyle}><LockOpenIcon /></Avatar></h2>
          </Grid>
          <Grid>

            <ThemeProvider theme={theme}>

              <TextField
                style={inputStyle}
                label='Mobile Number'
                id="mui-theme-provider-standard-input"
                fullWidth required
              />
            </ThemeProvider>
            <FormControlLabel
              control={
                <Checkbox

                  name="checkedB"
                  color="primary"
                />
              }
              label="Remember me"
            />

            <Button variant="contained" style={buttonStyle} fullWidth>
              SIGN IN
            </Button>
            <Typography>
              <Link href="#" variant="body2">
                {'Forgot Mobile Number ?'}
              </Link>
            </Typography>
            <Typography>
              Do you have an account ?
              <Link href="/register" variant="body2">
                {'Sign Up'}
              </Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}

