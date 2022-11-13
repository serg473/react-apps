const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';


let initialState = {
    profileData: [
        {
            id: 1,
            name: 'Sergey',
            src: 'https://www.w3schools.com/howto/img_avatar.png',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"
        },
        {
            id: 2,
            name: 'Elena',
            src: 'https://www.w3schools.com/howto/img_avatar2.png',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"
        },
        {
            id: 3,
            name: 'Nastya',
            src: 'https://www.w3schools.com/howto/img_avatar2.png',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"
        },
        {
            id: 4,
            name: 'Masha',
            src: 'https://www.w3schools.com/howto/img_avatar2.png',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"
        },
        {
            id: 5,
            name: 'Dima',
            src: 'https://www.w3schools.com/howto/img_avatar.png',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"
        },
        {
            id: 6,
            name: 'Petr',
            src: 'https://www.w3schools.com/howto/img_avatar.png',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"
        },
        {
            id: 7,
            name: 'Igor',
            src: 'https://www.w3schools.com/howto/img_avatar.png',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"
        },
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                profileData: [...state.profileData, {id: 8, name: 'Semen', src: 'https://www.w3schools.com/howto/img_avatar.png', message: state.newPostText}],
                newPostText: ""
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
export default profileReducer;