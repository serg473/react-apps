import React from "react";
import s from './Dialogs.module.css'
import App from "./DialogsItem/DialogsItem";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    let dataItem = props.state.profileData.map(el => <DialogsItem id = {el.id} name = {el.name} src = {el.src} message={el.message}/>);
    return (
        <div className={s.dialogs}>
            {dataItem}
            <div>
                <button onClick={addPost}>Add Post</button>
                <div>
                    <textarea ref={newPostElement} name="" id="new-post" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;