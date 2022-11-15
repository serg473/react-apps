import React from "react";
import s from './Music.module.css'
import Music from "./Music";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../../Redux/music-reducer";


let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        following: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollowing: (userId) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        }
    }
}

const MusicContainer = connect(mapStateToProps,mapDispatchToProps)(Music);

export default MusicContainer;