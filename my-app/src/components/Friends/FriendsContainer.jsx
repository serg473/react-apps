import React from "react";
import Friends from "./Friends";
import StoreContext from "../../StoreContext";


const FriendsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().friends.friendsData;
                return <Friends friends={state}/>
            }
        }
    </StoreContext.Consumer>
}
export default FriendsContainer;