const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const ADD_FRIENDS = 'ADD_FRIENDS';
const DEL_FRIENDS = 'DEL_FRIENDS';
const SET_FRIENDS = 'SET_FRIENDS';

let initialState = {
    profileData: [],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                profileData: [...state.profileData, {
                    id: 8,
                    name: 'Semen',
                    src: 'https://www.w3schools.com/howto/img_avatar.png',
                    message: state.newPostText
                }],
                newPostText: ""
            }
        }

        case ADD_FRIENDS: {
            return {
                ...state,
                profileData: state.profileData.map(pd => {
                    if (pd.id === action.profile_id) {
                        return {...pd, friends: true}
                    }
                    return pd;
                })
            }
        }

        case DEL_FRIENDS: {
            return {
                ...state,
                profileData: state.profileData.map(pd => {
                    if (pd.id === action.profile_id) {
                        return {...pd, friends: false}
                    }
                    return pd;
                })
            }
        }

        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.value
            }
        }

        case SET_FRIENDS: {
            return {...state, profileData: [...state.profileData, ...action.friends]}
        }

        default:
            return state;
    }
}
export const addPostActionCreater = () => ({type: ADD_POST})
export const updatePostActionCreater = (value) => ({type: UPDATE_POST_TEXT, value})
export const addFriendsAC = (profile_id) => ({type: ADD_FRIENDS, profile_id})
export const deleteFriendsAC = (profile_id) => ({type: DEL_FRIENDS, profile_id})
export const setFriendsAC = (friends) => ({type: SET_FRIENDS, friends})
export default profileReducer;