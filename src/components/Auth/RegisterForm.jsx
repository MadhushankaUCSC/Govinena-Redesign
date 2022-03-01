import React from "react";
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from "@material-ui/core";
import background from "../../assets/signup_background.jpg";
import {ThemeProvider,createTheme} from '@material-ui/core/styles';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
export default function LoginForm() {
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "60px auto", backgroundColor: 'rgba(255, 255, 255, 0.6)',borderRadius: '10px' }
  const avatarStyle = { backgroundColor: 'green' }
  const buttonStyle = { backgroundColor: 'green', color: 'white', marginTop: '60px', marginBottom: '30px' }
  const inputStyle = { width: '80%', marginTop: '10px', paddingBottom: '5px' }
  const backgroundStyle = {  /* The image used */
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundHeight: '800px',
    paddingTop: '60px',
    paddingBottom: '10%',
    width: '100%',
    height: '20%'
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

            <h2>Register <Avatar style={avatarStyle}><AssignmentIndIcon  /></Avatar></h2>
          </Grid>
          <Grid>

            <ThemeProvider theme={theme}>

              <TextField
                style={inputStyle}
                label='First Name'
                id="mui-theme-provider-standard-input"
                fullWidth required
              />
              <TextField
                style={inputStyle}
                label='Last Name'
                id="mui-theme-provider-standard-input"
                fullWidth required
              />
              <TextField
                style={inputStyle}
                label='Mobile Number'
                id="mui-theme-provider-standard-input"
                fullWidth required
              />
            </ThemeProvider>
           

            <Button variant="contained" style={buttonStyle} fullWidth>
              REGISTER
            </Button>
           
            <Typography>
              Do you have an account ?
              <Link href="/login" variant="body2">
                {'Sign In'}
              </Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}

