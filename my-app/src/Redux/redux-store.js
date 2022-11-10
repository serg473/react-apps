import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";
import friendsReducer from "./friends-reducer";
import musicReducer from "./music-reducer";

let reducers = combineReducers(
    {
    profile: profileReducer,
    news: newsReducer,
    friends: friendsReducer,
    musics: musicReducer
})

let store = createStore(reducers);

window.store = store;
export default store