import React from 'react';
import classes from '../ListPage/styles/pageController.module.css'
import { Box } from '@mui/material';
import ProfilePicture from '../Profile/ProfilePicture';
import SwitchTabs from '../Tabs/SwitchTabs';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function PageController(props) {
    return (
        <Box className={classes.pageControlMain} >
            <ProfilePicture />
            <SwitchTabs />
            <PersonAddIcon className={classes.personAddIcon} color="primary"/>
            <MoreVertIcon className={classes.moreVertIcon} color="primary"/>
        </Box>
    );
}

export default PageController;