import React from 'react';
import classes from '../ListPage/styles/pageController.module.css'
import { Box } from '@mui/material';
import ProfilePicture from '../Profile/ProfilePicture';
import SwitchTabs from '../Tabs/SwitchTabs';

function PageController(props) {
    return (
        <Box className={classes.pageControlMain} >
            <ProfilePicture />
            <SwitchTabs />
        </Box>
    );
}

export default PageController;