import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import Header from "../components/layout/Header"
import classes from '../auth/style/auth.module.css'
import { useReducer } from "react";
import { MOBILE_NUMBER, PASSWORD } from "../constants/typeConstants";
import { loginReducer } from "./actions/authReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const initialLoginValues = {
    mobileNumber: "",
    password: ""
  }

  const navigate = useNavigate()

  const [currentLoginInputState, dispatchLoginInput] = useReducer(loginReducer, initialLoginValues)

  const loginMobileNumberHandler = (e) => {
    dispatchLoginInput({ type: MOBILE_NUMBER, payload: e.target.value })
  }

  const loginPasswordHandler = (e) => {
    dispatchLoginInput({ type: PASSWORD, payload: e.target.value })
  }

  const validateLoginHandler = () => {

    const userDetails = {
      mobile_number: currentLoginInputState.mobileNumber,
      password: currentLoginInputState.password
    }
    axios.post('http://localhost:9898/login', userDetails)
      .then((data) => {
        if (data) {
          navigate('/chat')
          sessionStorage.setItem('storeNumber', data.data)
        } else {
          alert(data)
        }
      console.log(data)
    })
     
  }
  return (
    <>
      <Header />
      <Container>
        <Box className={classes.loginbox} >
          <Typography variant="h3" component="h2" className={classes.heading}>
            Login
          </Typography>
          <form className={classes.forminputs}>
            <Grid className={classes.grid} >
              <TextField
                id='mobile_number'
                label='Mobile Number '
                variant="standard"
                type='number'
                value={currentLoginInputState.mobileNumber}
                onChange={loginMobileNumberHandler}
                className={classes.textfield}
              />
            </Grid>
            <Grid className={classes.grid}>
              <TextField
                id='password'
                label='Password '
                variant="standard"
                type='password'
                value={currentLoginInputState.password}
                onChange={loginPasswordHandler}
                className={classes.textfield}
              />
            </Grid>
            <Grid className={classes.grid}>
              <Button onClick={validateLoginHandler} variant="contained">Login </Button>
            </Grid>
            <Typography className={classes.switchPage}>New User ? <Link className={classes.switchPage} to='/register'>Click here to Signup</Link></Typography>
          </form>
        </Box>

      </Container>
    </>
  )
}

export default Login