import React, { useState } from 'react';
import classes from '../ListPage/styles/pageController.module.css'
import { Box, Menu, MenuItem } from '@mui/material';
import ProfilePicture from '../Profile/ProfilePicture';
import SwitchTabs from '../Tabs/SwitchTabs';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Popup from '../Popup/Popup';
import AddContactForm from '../Forms/AddContactForm';

function PageController(props) {

    const [popup, setPopup] = useState(false)

    const getPopupStatus = (value) => {
        setPopup(value)
        console.log(value)
    }

    const addContactHandler = () => {
        setPopup(true)
        
    }
    return (
        <Box className={classes.pageControlMain} >
            <ProfilePicture />
            <SwitchTabs />
            <PersonAddIcon onClick={addContactHandler} className={classes.personAddIcon} color="primary"/>
            <MoreVertIcon className={classes.moreVertIcon} color="primary" aria-controls={true ? 'basic-menu' : undefined} />
            <Popup status={popup} title="Add Contact" content={<AddContactForm popupStatus={(value)=>{getPopupStatus(value)}} />} />
        </Box>
    );
}

export default PageController;