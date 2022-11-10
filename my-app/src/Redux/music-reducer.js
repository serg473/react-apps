const ADD_MUSIC = 'ADD_MUSIC';
const UPDATE_TEXT_MUSIC = 'UPDATE_TEXT_MUSIC';


let initialState = {
    musicData: [
        {id: 1, name: 'Linkin Park', date: '20.07.2022'},
        {id: 2, name: 'Metallica', date: '20.07.2022'},
        {id: 3, name: 'Qeen', date: '20.07.2022'},
        {id: 4, name: 'Ne-yo', date: '20.07.2022'},
        {id: 5, name: 'Pitbull', date: '13.03.2021'}
    ],
    musicText: ''
}

window.initialState = initialState;
const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MUSIC: {
            return {
                ...state,
                musicData: [...state.musicData, {id: 5, name: state.musicText, date: '20.07.2019',}],
                musicText: ""
            }
        }
        case UPDATE_TEXT_MUSIC: {
            return {
                ...state,
                musicText:action.value
            }
        }
        default:
            return state;
    }
}


export default musicReducer;
export const addMusicActionCreater = () => ({type: ADD_MUSIC});
export const updateTextMusicActionCreater = (value) => ({type: UPDATE_TEXT_MUSIC, value: value});