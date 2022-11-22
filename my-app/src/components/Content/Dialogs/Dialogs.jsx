import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import axios from "axios";


const Dialogs = (props) => {
    if(props.profile.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res =>{
            props.setFriendsAC(res.data.items);
        })

    }
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onUpdate = () => {
        let value = newPostElement.current.value;
        props.updateText(value);
    }
    let dataItem = props.profile.map(el => <DialogsItem setFriendsAC = {props.setFriendsAC} addFriendsAC = {props.addFriendsAC} deleteFriendsAC = {props.deleteFriendsAC} friends = {el.friends} key = {el.id} id = {el.id} name = {el.name} photos = {el.photos.small} message={el.message}/>);
    return (
        <div className={s.dialogs}>
            {dataItem}
            <div>
                <button onClick={onAddPost}>Add Post</button>
                <div>
                    <textarea onChange={onUpdate} ref={newPostElement} value={props.newPostText}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;