import React, { useState } from 'react';
import classes from './styles/profile.module.css'

function ProfilePicture(props) {

    const [profileImage, setProfileImage] = useState("https://i.ibb.co/ns11w2C/avatar.webp")

    const selectProfilePictureHandler = (e) => {
        const picture = URL.createObjectURL(e.target.files[0])
        setProfileImage(picture)
    }
    return (
        
        <label className={classes.label}>
            <input type='file'  className={classes.customfileinput} onChange={selectProfilePictureHandler} />
            <img src={profileImage} className={classes.profileImage} alt="profile_image" />
        </label>
    );
}

export default ProfilePicture;