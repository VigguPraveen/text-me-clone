import React, { useEffect, useState, useRef } from 'react';
import classes from './chats.module.css'
import { eventBus } from '../../Event bus/eventBus';

function Chats(props) {


    const [recievedChats, setRecievedChats] = useState([])
    const [sentChats, setSentChats] = useState([])
    const [chats, setChats] = useState([])
    const [storeNumber, setStoreNumber] = useState("")

    useEffect(() => {
        let array = []
        eventBus.on("FullChats", (data) => {
            array = []
            console.log(data.message)
            data.message.map((item) => {
                array.push(item)
            })
            let sortedArray = array.sort((a, b) => b.chatdate = a.chatdate)
            const storedNumber = sessionStorage.getItem('storeNumber')
            setChats(sortedArray)
            setStoreNumber(storedNumber)

            const recievedMessagesFilter = sortedArray.filter((item) => {
                return item.personA != storedNumber
            })

            const sentMessagesFilter = sortedArray.filter((item) => {
                return item.personA == storedNumber
            })

            setRecievedChats(recievedMessagesFilter)
            setSentChats(sentMessagesFilter)
        })

    }, [])

    const renderChats = () => {
        // let targetDiv = document.getElementById("scrollscreen");
        // targetDiv.scrollTop = targetDiv.scrollHeight;
      

        if (chats[0]) {
            console.log(chats[0])
            return chats[0].map((item, index) => {
                return <div key={index} className={item.personA == storeNumber ? classes.sent_msg : classes.recieved_msg}>
                    <p className={classes.chat_message}>{item.chats}</p>
                    <p className={classes.chatTime}>{item.chatdate.split(",")[1]}</p>
                </div>
            })
        }
    }


    return (
        <div className={classes.chats_div}>
            {renderChats()}
        </div>
    );
}

export default Chats;