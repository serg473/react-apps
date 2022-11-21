import React from "react";
import {
    addFriendsAC,
    addPostActionCreater,
    deleteFriendsAC,
    updatePostActionCreater
} from "../../../Redux/profile-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profile.newPostText,
        profile: state.profile.profileData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreater());
        },
        updateText: (value) => {
            let action = updatePostActionCreater(value);
            dispatch(action);
        },
        addFriendsAC: (profile_id) =>{
            dispatch(addFriendsAC(profile_id))
        },
        deleteFriendsAC: (profile_id) =>{
            dispatch(deleteFriendsAC(profile_id))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;