import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Popup(props) {

    const [open, setOpen] = useState(props.status)

    useEffect(() => {
        console.log(props.status)
      setOpen(props.status)  
    }, [props.status])
    return (
        <Dialog open={open}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                {props.content}
            </DialogContent>
        </Dialog>
    );
}

export default Popup;