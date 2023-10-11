import React  from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import classes from './styles.module.css'

function MoreVertIconComponent(props) {
    return (
        <MoreVertIcon className={classes.moreVertIcon} color="primary"  onClick={props.onClick} />
    );
}

export default MoreVertIconComponent;