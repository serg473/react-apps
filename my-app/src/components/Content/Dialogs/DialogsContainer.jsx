import React from "react";
import {addPostActionCreater, updatePostActionCreater} from "../../../Redux/profile-reducer";
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
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;