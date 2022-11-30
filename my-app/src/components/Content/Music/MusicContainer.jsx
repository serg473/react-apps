import React from "react";
import s from './Music.module.css'
import Music from "./Music";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalMusicCountAC, setUsersAC, unfollowAC} from "../../../Redux/music-reducer";


let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pagesize: state.usersPage.pagesize,
        totalMusicCount: state.usersPage.totalMusicCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setMusicTotalCount: (totalCount) => {
            dispatch(setTotalMusicCountAC(totalCount))
        }
    }
}

const MusicContainer = connect(mapStateToProps,mapDispatchToProps)(Music);

export default MusicContainer;