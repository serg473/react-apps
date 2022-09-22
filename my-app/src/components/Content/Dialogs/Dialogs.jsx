import React from "react";
import s from './Dialogs.module.css'
import App from "./DialogsItem/DialogsItem";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {
    let dataItem = props.state.profileData.map(el => <DialogsItem id = {el.id} name = {el.name} src = {el.src} message={el.message}/>);
    return (
        <div className={s.dialogs}>
            {dataItem}
        </div>
    )
}
export default Dialogs;