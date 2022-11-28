import React from 'react';
import pr from "./Profile.module.css";

const Profile = (props) => {



    return (
        <div className={pr.profile_item}>
            <div className={pr.img_profile}>
                <img src={props.profile.photo} alt=""/>
            </div>
            <div className={pr.information_profile}>
                <div>{props.profile.name}</div>
                <div>{props.profile.date}</div>
                <div>{props.profile.location.country}, <span>{props.profile.location.city}</span></div>
            </div>
        </div>
    );
};

export default Profile;