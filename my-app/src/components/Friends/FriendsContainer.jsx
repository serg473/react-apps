import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return{
        friends: state.friends.friendsData
    }
}


const FriendsContainer = connect(mapStateToProps)(Friends)
export default FriendsContainer;