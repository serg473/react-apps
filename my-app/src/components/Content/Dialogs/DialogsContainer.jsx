import React from "react";
import s from './Dialogs.module.css'
import {addPostActionCreater, updatePostActionCreater} from "../../../Redux/profile-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    debugger;
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreater());
    }
    let onUpdate = (value) => {
        let action = updatePostActionCreater(value);
        props.store.dispatch(action);
    }
    return (<Dialogs updateText = {onUpdate} addPost = {addPost} profile = {state.profile.profileData} newPostText = {state.profile.newPostText} />)
}
export default DialogsContainer;