import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalMusicCountAC, setUsersAC, unfollowAC} from "../../../Redux/music-reducer";
import axios from "axios";
import Music from "./Music";
class MusicAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setMusicTotalCount(response.data.totalCount)
                })
        }
    }

    onchangedPaged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setMusicTotalCount(response.data.totalCount)
            })
    }

    render() {
        return <Music totalMusicCount={this.props.totalMusicCount} pagesize={this.props.pagesize}
                      currentPage={this.props.currentPage} users={this.props.users} onchangedPaged={this.onchangedPaged}
                      unfollowing = {this.props.unfollowing} following = {this.props.following}

        />
    }
}

let mapStateToProps = (state) =>{
    debugger
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

const MusicContainer = connect(mapStateToProps,mapDispatchToProps)(MusicAPIComponent);

export default MusicContainer;