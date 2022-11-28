import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./music-reducer";
import myprofileReducer from "./myprofile-reducer";

let reducers = combineReducers(
    {
        profile: profileReducer,
        news: newsReducer,
        friends: friendsReducer,
        usersPage: usersReducer,
        myprofile: myprofileReducer
    })

let store = createStore(reducers);

window.store = store;
export default store