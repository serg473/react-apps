import React from "react";
import {addPostActionCreater, updatePostActionCreater} from "../../../Redux/profile-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreater());
                    }
                    let onUpdate = (value) => {
                        let action = updatePostActionCreater(value);
                        store.dispatch(action);
                    }
                    return <Dialogs updateText={onUpdate} addPost={addPost} profile={state.profile.profileData}
                                    newPostText={state.profile.newPostText}/>
                }
            }
        </StoreContext.Consumer>

}
export default DialogsContainer;