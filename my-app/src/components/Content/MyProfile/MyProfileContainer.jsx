import React from 'react';
import {connect} from "react-redux";
import MyProfile from "./MyProfile";
import {addPostAC, updatePostAC} from "../../../Redux/myprofile-reducer";


let mapStateToProps = (state) =>{
    debugger
    return{
        profile: state.myprofile.dataProfile,
        dataPost:state.myprofile.dataPost
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () =>{
            dispatch(addPostAC())
        },
        updateTxt: (value) =>{
            dispatch(updatePostAC(value))
        }
    }
}

let MyProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MyProfile);

export default MyProfileContainer;