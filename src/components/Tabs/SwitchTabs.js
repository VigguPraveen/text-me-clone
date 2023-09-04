import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import classes from './styles/tabs.module.css'

function SwitchTabs(props) {

    const [tabs, setTabs] = useState(0)

    const switchTabHandler = (event, value) => {
        setTabs(value)
    }

    return (
        <Tabs className={classes.tabs} value={tabs} onChange={switchTabHandler}>
            <Tab  label="Chats" />
            <Tab label="Contacts" />
            
            
        </Tabs>
    );
}

export default SwitchTabs;