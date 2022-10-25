import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";
import friendsReducer from "./friends-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    news: newsReducer,
    friends: friendsReducer
})

let store = createStore(reducers);

export default store