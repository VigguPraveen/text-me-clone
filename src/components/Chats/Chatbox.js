import React, { useEffect, useState } from 'react';
import classes from './chats.module.css'
import SendMessageIcon from '../common/SendMessageIcon';
import { eventBus } from '../../Event bus/eventBus';
import axios from 'axios';

function Chatbox(props) {

    const [chats, setChats] = useState('')
    const [chatterDetails, setChatterDetails] = useState({ name: "" })

    const chatHandler = (e) => {
        setChats(e.target.value)
        const personB = chatterDetails.personB;
        const personA = sessionStorage.getItem('storeNumber')
        let typingStatus = 1
        let randomNumber = Math.random()

        const obj = {
            personANumber: personA,
            personBNumber: personB,
            status: typingStatus
        }
        console.log("object...", obj)

        axios.post('http://localhost:9898/updateTypingStatus', obj)
        eventBus.dispatch('randomKey', { message: randomNumber })


        setTimeout(() => {
            typingStatus = 0
            const newObj = {
                personANumber: personA,
                personBNumber: personB,
                status: typingStatus
            }
            axios.post('http://localhost:9898/updateTypingStatus', newObj)
        }, 10000)

    }

    const sendChatHandler = () => {
        const personA = sessionStorage.getItem('storeNumber')
        const requestObject = {
            date: new Date().toLocaleString(),
            personA: personA,
            personBName: chatterDetails.name,
            personB: chatterDetails.personB,
            chats: chats,
        }
        setChats("")
        if (chats !== "") {
            axios.post('http://localhost:9898/sendChat', requestObject)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        eventBus.dispatch('refreshKey', { message: Math.random() })
        } else {
            alert(`You have no messages to send to ${chatterDetails.name}`)
        }
        
    }

    useEffect(() => {
        eventBus.on("chatterDetails", (data) => {
            setChatterDetails(data.message)
            console.log(data.message)
        })
    }, [])
    return (
        <div className={classes.chatdiv}>
            <input className={classes.chatbox} onChange={chatHandler} value={chats} />
            <SendMessageIcon onClick={sendChatHandler} />
        </div>

    );
}

export default Chatbox;