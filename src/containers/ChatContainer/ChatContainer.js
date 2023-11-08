import React, { useEffect, useState } from 'react';
import classes from '../styles/chatContainer.module.css'
import Chatbox from '../../components/Chats/Chatbox';
import Chats from '../../components/Chats/Chats';
import DisplayChatter from '../../components/Chats/DisplayChatter';
import axios from 'axios';


function ChatContainer(props) {

    return (
        <div className={classes.chatContainer}>
            <DisplayChatter/>
            <Chats />
            <Chatbox />
        </div>
    );
}

export default ChatContainer;