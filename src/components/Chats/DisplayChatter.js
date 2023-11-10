import React, { useEffect, useState } from 'react';
import classes from './chats.module.css';
import { eventBus } from '../../Event bus/eventBus';
import axios from 'axios';

function DisplayChatter(props) {
    const [chatterDetails, setChatterDetails] = useState({ name: "" })
    const [chatStatus, setChatStatus] = useState(0)
    let image;
    if (chatterDetails.profileimage) {
        image = chatterDetails.profileimage
    }
    useEffect(() => {
        eventBus.on("chatterDetails", (data) => {
            setChatterDetails(data.message)
            setInterval(() => {
                fetchProfileStatus(data.message.personB)
            }, 1000)
        })
    }, [])

    const fetchProfileStatus = (personBNumber) => {
        const obj = {
            personBNumber: personBNumber
        }
        axios.post('http://localhost:9898/getTypingStatus', obj)
            .then((res) => {
                if (res.data.length !== 0) {
                    let myNumber = sessionStorage.getItem('storeNumber')
                    let parsedPersonB = Number(res.data[0].personB)
                    let parsedMyNumber = Number(myNumber)
                    let retrievedChatStaus = Number(res.data[0].chatstatus)
                    if (parsedPersonB === parsedMyNumber && retrievedChatStaus === 1) {
                        setChatStatus(1)
                    } else if (parsedPersonB === parsedMyNumber && retrievedChatStaus === 0) {
                        setChatStatus(0)
                    }
                }
            })
    }
    return (
        <div className={classes.chatHeader}>
            <div className={classes.profile_div}>
                <img className={classes.profile_image} src={image === "null" ? "https://i.ibb.co/ns11w2C/avatar.webp" : `http://localhost:9898/images/${image}`} />
            </div>
            <div className={classes.profile_name}>
                {chatterDetails.name}
                <div className={classes.typingStatus}>{chatStatus === 1 ? "Typing..." : ""}{"chat", chatStatus}</div>
            </div>
        </div>
    );
}

export default DisplayChatter;