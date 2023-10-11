import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import classes from './styles.module.css'

function SendMessageIcon(props) {
    return (
        <TelegramIcon color='primary' className={classes.send_msg_icon} />
    );
}

export default SendMessageIcon;