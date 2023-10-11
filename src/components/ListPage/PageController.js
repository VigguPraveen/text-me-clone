import React, { useState } from 'react';
import classes from '../ListPage/styles/pageController.module.css'
import { Box } from '@mui/material';
import ProfilePicture from '../Profile/ProfilePicture';
import SwitchTabs from '../Tabs/SwitchTabs';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Popup from '../Popup/Popup';
import AddContactForm from '../Forms/AddContactForm';
import MoreVertIconComponent from '../common/MoreVertIcon';
import PopOverComponent from '../common/PopOverComponent';

const popoverZones = {
    vertical: 'top',
    horizontal: 'right'
}
const popoverContent = ["Settings", "Logout"]

function PageController(props) {

    const [popup, setPopup] = useState(false)
    const [openPopover, setOpenPopover] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);


    const togglePopoverHandler = (e) => {
        setOpenPopover(!openPopover)
        setAnchorEl(e.currentTarget)
    }

    const getPopupStatus = (value) => {
        setPopup(value)
    }

    const addContactHandler = () => {
        setPopup(true)
    }

    const sendTabKey = (key) => {
        props.getTabKeyByParent(key)
    }

    const getPopoverState = (value) => {
        setOpenPopover(value)
    }
    return (
        <Box className={classes.pageControlMain} >
            <ProfilePicture />
            <SwitchTabs getTabKey={(key) => { sendTabKey(key) }} />
            <PersonAddIcon onClick={addContactHandler} className={classes.personAddIcon} color="primary" />
            <MoreVertIconComponent onClick={togglePopoverHandler} />
            <Popup status={popup} title="Add Contact" content={<AddContactForm popupStatus={(value) => { getPopupStatus(value) }} />} />
            <PopOverComponent anchor={anchorEl} isopen={openPopover} popoverPositions={popoverZones} sendState={(value) => { getPopoverState(value) }} data={popoverContent} />
        </Box>
    );
}

export default PageController;