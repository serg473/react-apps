import React from "react";
import s from './Dialogs.module.css'
import App from "./DialogsItem/DialogsItem";
import DialogsItem from "./DialogsItem/DialogsItem";


const Dialogs = (props) => {
    debugger;
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onUpdate = () => {
        let value = newPostElement.current.value;
        props.updateText(value);
    }
    let dataItem = props.profile.map(el => <DialogsItem id = {el.id} name = {el.name} src = {el.src} message={el.message}/>);
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