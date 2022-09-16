import React from "react";
import s from './User.module.css'

const User = (props) => {
    return (
        <div className={s.name}>{props.name}</div>
    )
}
export default User;