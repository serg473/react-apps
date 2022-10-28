import React from "react";
import s from './Friends.module.css'
import FriendsProfile from "./FriendsProfile/FriendsProfile";

const Friends = (props) => {
    let FriendsItem = props.friends.map(el => <FriendsProfile src = {el.src} name ={el.name} id ={el.id}/>)
    return (
        <section className={s.friends}>
            <h2 className={s.title}>Друзья</h2>
            <div className={s.friends_aside}>
                {FriendsItem}
            </div>
        </section>
    )
}
export default Friends;