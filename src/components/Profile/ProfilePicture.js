import React, { useEffect, useState } from 'react';
import classes from './styles/profile.module.css';
import axios from 'axios';


function ProfilePicture(props) {

    const [profileImage, setProfileImage] = useState({
        image: "https://i.ibb.co/ns11w2C/avatar.webp",
        default: true
    })
    const [pageRelaod, setPageReload] = useState(0)

    const selectProfilePictureHandler = (e) => {
        const formdata = new FormData()
        formdata.append('image', e.target.files[0])

        axios.post('http://localhost:9898/setProfileImage', formdata)
            .then(res => {
                console.log(res)
                const number = Math.random()
                setPageReload(number)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const mobileNumber = sessionStorage.getItem('storeNumber');
        const obj = {
            mobile_number: mobileNumber
        }

        axios.post(`http://localhost:9898/setNumber`, obj)
            .then(res => console.log(res))

        axios.get('http://localhost:9898/getProfile')
            .then(res => {
                if (res.data.image !== null) {
                    setProfileImage({
                        image: res.data.image,
                        default: false
                    })
                }

            })
        console.log("useeffect")

    }, [pageRelaod])
    return (
        <label className={classes.label}>
            <input type='file' className={classes.customfileinput} onChange={selectProfilePictureHandler} />
            <img src={profileImage.default ? profileImage.image : `http://localhost:9898/images/${profileImage.image}`} className={classes.profileImage} alt="profile_image" />
        </label>
    );
}

export default ProfilePicture;