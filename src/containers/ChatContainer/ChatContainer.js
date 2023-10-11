import React from 'react';
import classes from '../styles/chatContainer.module.css'
import Chatbox from '../../components/common/Chatbox';


function ChatContainer(props) {
    return (
        <div className={classes.chatContainer}>
            <Chatbox />
        </div>
    );
}

export default ChatContainer;