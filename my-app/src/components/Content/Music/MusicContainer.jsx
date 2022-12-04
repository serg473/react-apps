import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setToggleIsFetching,
    setTotalMusicCountAC,
    setUsersAC,
    unfollowAC
} from "../../../Redux/music-reducer";
import axios from "axios";
import Music from "./Music";
import loader from './images/loading.svg'
import Preloader from "../common/Preloader/Preloader";
//Use for ajax-query
class MusicAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesize}`)
                .then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setMusicTotalCount(response.data.totalCount)
                })
        }
    }

    onchangedPaged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setMusicTotalCount(response.data.totalCount)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Music totalMusicCount={this.props.totalMusicCount} pagesize={this.props.pagesize}
                   currentPage={this.props.currentPage} users={this.props.users} onchangedPaged={this.onchangedPaged}
                   unfollowing={this.props.unfollowing} following={this.props.following}

            />
            </>
    }
}

let mapStateToProps = (state) => {
    return {

        users: state.usersPage.users,
        pagesize: state.usersPage.pagesize,
        totalMusicCount: state.usersPage.totalMusicCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        following: (userId) => {
            dispatch(followAC(userId))
        },
        unfollowing: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setMusicTotalCount: (totalCount) => {
            dispatch(setTotalMusicCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setToggleIsFetching(isFetching))
        }
    }
}

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(MusicAPIComponent);

export default MusicContainer;