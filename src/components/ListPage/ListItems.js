import React, { useState } from 'react';
import ProfilePicture from '../Profile/ProfilePicture';
import classes from './styles/listItems.module.css'
import MoreVertIconComponent from '../common/MoreVertIcon';
import PopOverComponent from '../common/PopOverComponent';

const popoverZones = {
    vertical: 'top',
    horizontal: 'right'
}
const popoverContent = ["Start Chat"]

function ListItems(props) {

    const [openPopover, setOpenPopover] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);

    const togglePopoverHandler = (e) => {
        setOpenPopover(!openPopover)
        setAnchorEl(e.currentTarget)
    }

    const getPopoverState = (value) => {
        setOpenPopover(value)
    }

    const renderData = ({ data }) => {
        if (data) {
            return data.map((item) => {
                return (
                    <div className={classes.list_main}>
                        <div className={classes.profile_div}>
                            <img className={classes.profile_image} src={item.image} />
                        </div>
                        <div className={classes.profile_name}>{item.name}</div>
                        <div className={classes.icon}>
                            <MoreVertIconComponent onClick={togglePopoverHandler} />
                            <PopOverComponent anchor={anchorEl} isopen={openPopover} popoverPositions={popoverZones} sendState={(value) => { getPopoverState(value) }} data={popoverContent} />

                        </div>
                    </div>
                )
            })
        }
    }
    return (
        <div>
            {renderData(props)}
        </div>
    );
}

export default ListItems;