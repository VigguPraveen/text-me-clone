import React from 'react';
import classes from './styles.module.css'
import SendMessageIcon from './SendMessageIcon';

function Chatbox(props) {
    return (
        <div className={classes.chatdiv}>
            <input className={classes.chatbox} />
            <SendMessageIcon />
        </div>
       
    );
}

export default Chatbox;