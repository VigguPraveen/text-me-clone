import React, { useEffect, useState } from 'react';
import PopoverBox from '@mui/material/Popover';
import classes from './styles.module.css'


function PopOverComponent(props) {

  const [open, setOpen] = useState(false)
  const [content, setContent] = useState([])

  const { popoverPositions, isopen, anchor, data } = props;
  const id = 'simple-popover';
  const handleClose = () => {
    setOpen(false)
    props.sendState(false)
  }

  useEffect(() => {
    setOpen(isopen)
    setContent(data)
  }, [isopen])

  const renderContent = () => {
    return content.map((item, index) => {
      return <li className={classes.dataList} key={index}>{item}</li>
    })
  }
  return (
    <PopoverBox
      id={id}
      open={open}
      onClose={handleClose}
      anchorEl={anchor}
      anchorOrigin={{
        vertical: popoverPositions.vertical,
        horizontal: popoverPositions.horizontal,
      }}
    >

      {renderContent()}
    </PopoverBox>
  );
}

export default PopOverComponent;