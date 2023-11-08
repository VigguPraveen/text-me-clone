import React, { useEffect, useState } from 'react';
import classes from '../styles/listContainer.module.css'
import PageController from '../../components/ListPage/PageController';
import { ListItem } from '@mui/material';
import ListItems from '../../components/ListPage/ListItems';
import axios from 'axios';

let API_URL;

function ListContainer(props) {

    const [tabKey, setTabKey] = useState(0)
    const [listData, setListData] = useState([])
    const [chatterList, setChatterList] = useState([])

    useEffect(() => {
        const chatterArray = []
        if (tabKey === 0) {
            API_URL = `http://localhost:9898/getChat`
        } else if (tabKey === 1) {
            API_URL = `http://localhost:9898/getAllContacts`
        }

        axios.get(`${API_URL}`)
            .then((res) => {
                setListData(res.data)
                if (tabKey === 0) {
                    res.data.map((item) => {
                        chatterArray.push(item)
                    })

                    const ids = chatterArray.map(({ personB }) => personB);
                    const filtered = chatterArray.filter(({ personB }, index) =>
                        !ids.includes(personB, index + 1));

                    setChatterList(filtered)
                    console.log(chatterList)
                }

            })
    }, [tabKey])

    const getTabKey = (key) => {
        setTabKey(key)
    }
    return (
        <div className={classes.listContainer}>
            <PageController getTabKeyByParent={(key) => getTabKey(key)} />
            <ListItems data={listData} tabkey={tabKey} chatsList={chatterList} />
        </div>
    );
}

export default ListContainer;