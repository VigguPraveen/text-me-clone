import React from 'react';
import classes from '../ListPage/styles/pageController.module.css'
import { Box } from '@mui/material';
import ProfilePicture from '../Profile/ProfilePicture';

function PageController(props) {
    return (
        <Box className={classes.pageControlMain} >
            <ProfilePicture />
        </Box>
    );
}

export default PageController;