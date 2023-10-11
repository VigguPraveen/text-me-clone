import React, { useEffect, useState } from 'react';
import classes from '../styles/listContainer.module.css'
import PageController from '../../components/ListPage/PageController';
import { ListItem } from '@mui/material';
import ListItems from '../../components/ListPage/ListItems';

let API_URL;

function ListContainer(props) {

    const [tabKey, setTabKey] = useState(0)
    const [listData, setListData] = useState([])

    useEffect(() => {

        if (tabKey === 0) {
            API_URL = `http://localhost:8000/getAllChatters`
        } else if (tabKey === 1) {
            API_URL = `http://localhost:8000/getAllContacts`
        }
        const personANumber = sessionStorage.getItem('storeNumber')
        const obj = {
            personANumber: personANumber
        }
    
        fetch(`${API_URL}`,
            {
                method: 'POST',
                headers: { "content-type": 'application/json' },
                body: JSON.stringify(obj)
            })
            .then(res => res.json())
            .then((data)=>setListData(data))
    }, [tabKey])

    const getTabKey = (key) => {
        setTabKey(key)
    }
    return (
        <div className={classes.listContainer}>
            <PageController getTabKeyByParent={(key) => getTabKey(key)} />
            <ListItems data={listData} />
        </div>
    );
}

export default ListContainer;