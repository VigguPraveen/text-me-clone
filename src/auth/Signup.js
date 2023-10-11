import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../auth/style/auth.module.css'
import Header from '../components/layout/Header';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NAME, MOBILE_NUMBER, PASSWORD } from '../constants/typeConstants'
import { registerReducer } from '../auth/actions/authReducer'
import Loader from '../components/common/Loader';

function Signup() {

    const initalInputValues = {
        name: "",
        mobileNumber: "",
        password: ""
    }

    const navigate = useNavigate()

    const [loader, setLoader] = useState(false)
    const [registerUserState, dispatchRegisterInput] = useReducer(registerReducer, initalInputValues)

    const registerNameInputHandler = (e) => {
        dispatchRegisterInput({ type: NAME, payload: e.target.value })
    }

    const registerMobileNumberInputHandler = (e) => {
        dispatchRegisterInput({ type: MOBILE_NUMBER, payload: e.target.value })
    }

    const registerPasswordInputHandler = (e) => {
        dispatchRegisterInput({ type: PASSWORD, payload: e.target.value })
    }

    const validateRegistration = () => {

        const request = {
            name: registerUserState.name,
            mNumber: registerUserState.mobileNumber,
            password: registerUserState.password
        }
        setLoader(true)
        fetch("http://localhost:8000/registerUser", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => {
            if (res) {
                setLoader(false)
            } if (res.status === 200) {
                navigate('/')
            }
        })
        .catch((err)=>console.log(err))
    }
    return (
        <>
            <Header />
            {loader && <Loader />}
            <Container>
                <Box className={classes.loginbox} >
                    <Typography variant="h3" component="h2" className={classes.heading}>
                        Register
                    </Typography>
                    <form className={classes.forminputs}>
                        <Grid className={classes.grid} >
                            <TextField
                                id='name'
                                label='Name '
                                variant="standard"
                                type='text'
                                className={classes.textfield}
                                value={registerUserState.name}
                                onChange={registerNameInputHandler}
                            />
                        </Grid>
                        <Grid className={classes.grid} >
                            <TextField
                                id='mobile_number'
                                label='Mobile Number '
                                variant="standard"
                                type='number'
                                className={classes.textfield}
                                value={registerUserState.mobileNumber}
                                onChange={registerMobileNumberInputHandler}
                            />
                        </Grid>
                        <Grid className={classes.grid}>
                            <TextField
                                id='password'
                                label='Create Password '
                                variant="standard"
                                type='password'
                                className={classes.textfield}
                                value={registerUserState.password}
                                onChange={registerPasswordInputHandler}
                            />
                        </Grid>
                        <Grid className={classes.grid}>
                            <Button variant="contained" onClick={validateRegistration}>Register </Button>
                        </Grid>
                    </form>
                </Box>

            </Container>
        </>
    );
}

export default Signup;