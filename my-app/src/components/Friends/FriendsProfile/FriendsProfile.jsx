import React from "react";
import s from './FriendsProfile.module.css'
import {NavLink} from "react-router-dom";

const FriendsProfile = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={'/id' + props.id}>
                <img src={props.src} alt=""/>
                <div className={s.name}>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}
export default FriendsProfile;