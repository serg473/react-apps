import React from "react";
import s from './Dialogs.module.css'
import App from "./DialogsItem/DialogsItem";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {
    let dataItem = props.dataContent;
    return (
        <div className={s.dialogs}>
            {dataItem.map(el => <DialogsItem id = {el.id} name = {el.name} src = {el.src} message={el.message}/>)}
        </div>
    )
}
export default Dialogs;