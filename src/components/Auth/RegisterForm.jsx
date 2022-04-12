import React ,{useState} from "react";
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from "@material-ui/core";
import background from "../../assets/signup_background.jpg";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Axios } from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  let navigate = useNavigate();
  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [mobileReg, setMobileReg] = useState("");

  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "60px auto", backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '10px' }
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

  const register = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_BASE_URL}/register`, {
      firstName: firstNameReg,
      lastName: lastNameReg,
      mobileNo: mobileReg
    }).then((response) => {
      if (response.data.status == 201) {
        navigate('/login');
      } else {
        console.log(response.data.status);
      }
    }).catch((error) => {
      console.log("This is response" + error);

    });

  }


  return (
    <div style={backgroundStyle}>
      <Grid >
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>

            <h2>Register <Avatar style={avatarStyle}><AssignmentIndIcon /></Avatar></h2>
          </Grid>
          <Grid>

            <ThemeProvider theme={theme}>

              <TextField
                style={inputStyle}
                label='First Name'
                id="mui-theme-provider-standard-input"
                fullWidth required
                onChange={(e) => { setFirstNameReg(e.target.value); }}
              />
              <TextField
                style={inputStyle}
                label='Last Name'
                id="mui-theme-provider-standard-input"
                fullWidth required
                onChange={(e) => { setLastNameReg(e.target.value); }}
              />
              <TextField
                style={inputStyle}
                label='Mobile Number'
                id="mui-theme-provider-standard-input"
                fullWidth required
                onChange={(e) => { setMobileReg(e.target.value); }}
              />
            </ThemeProvider>


            <Button variant="contained" style={buttonStyle} fullWidth onClick={(e) => { register(e) }}>
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

