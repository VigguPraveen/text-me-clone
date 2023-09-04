import React from 'react';
import classes from '../styles/mainPageContainer.module.css'
import { Container } from '@mui/material';
import ListContainer from '../ListContainer/ListContainer';

function MainpageContainer(props) {
    return (
        <div className={classes.mainContainer}>
            <ListContainer />
        </div>
    );
}

export default MainpageContainer;