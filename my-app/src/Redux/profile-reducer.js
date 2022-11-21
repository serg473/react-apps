import friends from "../components/Friends/Friends";

const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const ADD_FRIENDS = 'ADD_FRIENDS';
const DEL_FRIENDS = 'DEL_FRIENDS'

let initialState = {
    profileData: [
        {id: 1, friends: true, name: 'Sergey', src: 'https://www.w3schools.com/howto/img_avatar.png', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
        {id: 2, friends: false, name: 'Elena', src: 'https://www.w3schools.com/howto/img_avatar2.png', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
        {id: 3, friends: false, name: 'Nastya', src: 'https://www.w3schools.com/howto/img_avatar2.png', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
        {id: 4, friends: true, name: 'Masha', src: 'https://www.w3schools.com/howto/img_avatar2.png', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
        {id: 5, friends: false, name: 'Dima', src: 'https://www.w3schools.com/howto/img_avatar.png', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
        {id: 6, friends: true, name: 'Petr', src: 'https://www.w3schools.com/howto/img_avatar.png', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
        {id: 7, friends: false, name: 'Igor', src: 'https://www.w3schools.com/howto/img_avatar.png', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"
        },
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                profileData: [...state.profileData, {id: 8, name: 'Semen', src: 'https://www.w3schools.com/howto/img_avatar.png', message: state.newPostText}],
                newPostText: ""
            }
        }

        case ADD_FRIENDS:{
            return{
                ...state,
                profileData: state.profileData.map(pd => {
                    if(pd.id === action.profile_id){
                        return {...pd, friends: true}
                    }
                    return pd;
                })
            }
        }

        case DEL_FRIENDS:{
            return{
                ...state,
                profileData: state.profileData.map(pd => {
                    if(pd.id === action.profile_id){
                        return {...pd, friends: false}
                    }
                    return pd;
                })
            }
        }

        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newtext
            }
        }

        default:
            return state;
    }
}
export const addPostActionCreater = () => ({type: ADD_POST})
export const updatePostActionCreater = (value) => ({type: UPDATE_POST_TEXT, newtext: value})
export const addFriendsAC = (profile_id) => ({type: ADD_FRIENDS, profile_id})
export const deleteFriendsAC = (profile_id) => ({type: DEL_FRIENDS, profile_id})
export default profileReducer;