import React from "react";
import s from './Dialogs.module.css'
import App from "./DialogsItem/DialogsItem";
import DialogsItem from "./DialogsItem/DialogsItem";
import {updateStateProfile, updateText} from "../../../Redux/state";

const Dialogs = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onUpdate = () => {
        let value = newPostElement.current.value;
        props.updateText(value);
        console.log(value);
    }
    let dataItem = props.state.profileData.map(el => <DialogsItem id = {el.id} name = {el.name} src = {el.src} message={el.message}/>);
    return (
        <div className={s.dialogs}>
            {dataItem}
            <div>
                <button onClick={addPost}>Add Post</button>
                <div>
                    <textarea onChange={onUpdate} ref={newPostElement} value={props.newPostText}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;