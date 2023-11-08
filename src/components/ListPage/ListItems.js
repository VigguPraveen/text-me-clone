import React, { useState } from 'react';
import classes from './styles/listItems.module.css'
import { eventBus } from '../../Event bus/eventBus';
import axios from 'axios';


function ListItems(props) {

    const [chattingPerson, setChattingPerson] = useState("")
    const [refreshKey, setRefreshKey] = useState(0)

    const redirectToChatHandler = (item) => {
        eventBus.dispatch("chatterDetails", { message: item })
        setChattingPerson(item.personB)
    }

    const renderData = ({ data, tabkey, chatsList }) => {

        eventBus.on("refreshKey", (data) => {
            setRefreshKey(data.message)
            console.log(refreshKey)
        })

        const result = []
        const obj = {
            personBNumber: chattingPerson
        }
        console.log(obj)
        setTimeout(() => {
            axios.post('http://localhost:9898/getOnePersonChat', obj)
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res.data)
                        result.push(res.data)
                        console.log(result)
                        eventBus.dispatch("FullChats", { message: result })
                    }
                }).catch((err) => {
                    console.log(err)
                })
        }, 500)


        if (data.length > 0 && tabkey === 1) {
            return data.map((item) => {
                return (
                    <div className={classes.list_main} onClick={() => { redirectToChatHandler(item) }}>
                        <div className={classes.list_sub}>
                            <div className={classes.profile_div}>
                                <img className={classes.profile_image} src={item.profileimage === "null" ?"https://i.ibb.co/ns11w2C/avatar.webp" : `http://localhost:9898/images/${item.profileimage}` } alt="profileImage" />
                            </div>
                            <div className={classes.profile_name}>{item.name}</div>
                        </div>
                    </div>
                )
            })
        } else if (chatsList.length > 0 && tabkey === 0) {
            return chatsList.map((item) => {
                return (
                    <div className={classes.list_main} onClick={() => { redirectToChatHandler(item) }}>
                        <div className={classes.list_sub}>
                            <div className={classes.profile_div}>
                                <img className={classes.profile_image} src={item.profileimage === "null" ? "https://i.ibb.co/ns11w2C/avatar.webp" : `http://localhost:9898/images/${item.profileimage}`} alt="profileImage" />
                            </div>
                            <div className={classes.profile_name}>{item.name}</div>
                        </div>
                        <p className={classes.lastchat}>{item.chats}</p>
                    </div>

                )
            })
        } else if (data.length === 0 && tabkey === 0) {
            return <p className={classes.noShow}>No chats to display</p>
        }
    }
    return (
        <div>
            {renderData(props)}
        </div>
    );
}

export default ListItems;