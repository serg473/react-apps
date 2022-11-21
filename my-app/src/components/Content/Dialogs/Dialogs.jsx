import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";


const Dialogs = (props) => {
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onUpdate = () => {
        let value = newPostElement.current.value;
        props.updateText(value);
    }
    let dataItem = props.profile.map(el => <DialogsItem addFriendsAC = {props.addFriendsAC} deleteFriendsAC = {props.deleteFriendsAC} friends = {el.friends} key = {el.id} id = {el.id} name = {el.name} src = {el.src} message={el.message}/>);
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