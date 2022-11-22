import React from "react";
import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {


    let path = '/dialogs/item' + props.id;
    return (
        <div>
            <div className={s.dialogs_item}>
                <div className={s.name}>
                    <img src={props.photos != null ? props.photos.small : 'https://www.w3schools.com/howto/img_avatar.png'} alt=""/>
                </div>
                <div className={s.message_item}>
                    <NavLink to = {path}>{props.name}</NavLink>
                    <p>{props.message}</p>
                </div>
                {props.friends ? <div onClick={() => {props.deleteFriendsAC(props.id)}} className={s.btn}>Удалить из друзей</div> : <div onClick={() => {props.addFriendsAC(props.id)}} className={s.btn}>Добавить в друзья</div>}
            </div>
        </div>
    )
}
export default DialogsItem;