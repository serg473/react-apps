import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";

let Profile = [
    {id:1, name:'Sergey', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
    {id:2, name:'Elena', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
    {id:3, name:'Nastya', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
    {id:4, name:'Masha', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
    {id:5, name:'Dima', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
    {id:6, name:'Petr', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
    {id:7, name:'Igor', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
]

let Item = Profile.map(el => <DialogsItem id={el.id}  name={el.name} message = {el.message}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            {Item}
        </div>
    )
}
export default Dialogs;