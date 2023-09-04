import React from 'react';
import classes from '../styles/listContainer.module.css'
import PageController from '../../components/ListPage/PageController';

function ListContainer(props) {
    return (
        <div className={classes.listContainer}>
            <PageController />
        </div>
    );
}

export default ListContainer;