import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material"
import Header from "../components/layout/Header"
import classes from '../auth/style/login.module.css'
import { useReducer } from "react";
import { MOBILE_NUMBER, PASSWORD } from "../constants/typeConstants";
import { loginReducer } from "./actions/auth-actions";


function Login() {

   const initialLoginValues = {
    mobileNumber: "",
    password: ""
  }

  const [currentLoginInputState, dispatchLoginInput] = useReducer(loginReducer, initialLoginValues)

const loginMobileNumberHandler = (e) => {
   dispatchLoginInput({type: MOBILE_NUMBER, payload: e.target.value}) 
}
  
  const loginPasswordHandler = (e) => {
  dispatchLoginInput({type: PASSWORD, payload: e.target.value})
  }
  
  const validateLoginHandler = () => {
    console.log(currentLoginInputState)
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



          </form>
        </Box>

      </Container>
    </>
  )
}

export default Login