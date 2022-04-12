import React, { useState } from "react";
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from "@material-ui/core";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import background from "../../assets/login_background.jpg";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Axios } from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  let navigate = useNavigate();
  const [mobileNo, setMobileNo] = useState("");
  const [buttonDisable, setButtonDisable] = useState(true);
  const [validationError, setValidationError] = useState("");
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "60px auto", backgroundColor: 'rgba(255, 255, 255, 0.75)', borderRadius: '10px' }
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

  const login = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_BASE_URL}/signIn`, {
      mobileNo: mobileNo,
    }).then((response) => {
      if (response.data.status == 201) {
        // document.cookie = `userId=${response.data.userId}`;
        // document.cookie = `token=${response.data.token}`;
        navigate('/mainmenu');
      } else {
        navigate('/login');
      }
    }).catch((error) => {
      console.log("This is the Error", error);
    });
  }

  const CheckMobileNo = (mobile) => {
    if (mobile.length == 10 && !isNaN(mobile)) {
      setMobileNo(mobile);
      setButtonDisable(false);
      setValidationError("");
    } else {
      setButtonDisable(true);
      setValidationError("Not a Valid Mobile");
    }
  }

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
                onChange={(e) => { CheckMobileNo(e.target.value) }}
              />
            </ThemeProvider>
            <Typography style={{ color: 'red', fontSize: '10px' }}>
              {validationError}
            </Typography>
            <FormControlLabel
              control={
                <Checkbox

                  name="checkedB"
                  color="primary"
                />
              }
              label="Remember me"
            />

            <Button variant="contained" style={buttonStyle} fullWidth onClick={(e) => { login(e) }} disabled={buttonDisable}>
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

