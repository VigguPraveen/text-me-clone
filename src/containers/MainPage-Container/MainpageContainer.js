import React from 'react';
import classes from '../styles/mainPageContainer.module.css'
import { Container } from '@mui/material';
import ListContainer from '../ListContainer/ListContainer';
import ChatContainer from '../ChatContainer/ChatContainer';

function MainpageContainer(props) {
    return (
        <div className={classes.mainContainer}>
            <ListContainer />
            <ChatContainer />
        </div>
    );
}

export default MainpageContainer;