const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const profileReducer = (state,action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 8,
                name: 'Semen',
                src: 'https://www.w3schools.com/howto/img_avatar.png',
                message: state.newPostText
            }
            state.profileData.push(newPost);
            state.newPostText = "";
            return state;
            break;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newtext;
            return state;
            break;
        default:
            return state;
    }
}
export const addPostActionCreater = () =>  ({type: ADD_POST})
export const updatePostActionCreater = (value) => ({type: UPDATE_POST_TEXT, newtext: value})
export default profileReducer;