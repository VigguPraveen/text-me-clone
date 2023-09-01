import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material"
import Header from "../components/layout/Header"
import classes from '../auth/style/login.module.css'

function Login() {
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
                className={classes.textfield}
              />
            </Grid>
            <Grid className={classes.grid}>
              <TextField
                id='password'
                label='Password '
                variant="standard"
                type='password'
                className={classes.textfield}
              />
            </Grid>
            <Grid className={classes.grid}>
              <Button variant="contained">Login </Button>
            </Grid>



          </form>
        </Box>

      </Container>
    </>
  )
}

export default Login