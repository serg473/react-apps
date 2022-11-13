const ADD_MUSIC = 'ADD_MUSIC';
const UPDATE_TEXT_MUSIC = 'UPDATE_TEXT_MUSIC';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_MUSIC = 'SET_MUSIC'

let initialState = {
    musicData: [
        {
            id: 1,
            followed: 'false',
            name: 'Linkin Park',
            preview: "https://www.todorock.com/wp-content/uploads/2019/10/linkin-park-the-hunting-party.jpg",
            date: '20.07.2022'
        },
        {
            id: 2,
            followed: 'true',
            name: 'Metallica',
            preview: "https://townsquare.media/site/295/files/2015/08/MET1.jpg?w=980&q=75",
            date: '20.07.2022'
        },
        {
            id: 3,
            followed: false,
            name: 'Qeen',
            preview: "https://preview.redd.it/ojb5py3gjvl31.jpg?auto=webp&s=d0291f4e885a197b69d7b063bc6a6076325738ce",
            date: '20.07.2022'
        },
        {
            id: 4,
            followed: true,
            name: 'Ne-yo',
            preview: "https://upload.wikimedia.org/wikipedia/en/2/23/Ne_Yo_-_Non_Fiction_%28Official_Album_Cover%29.png",
            date: '20.07.2022'
        },
        {
            id: 5,
            followed: false,
            name: 'Pitbull',
            preview: "https://i.scdn.co/image/ab67616d0000b27314eb5ef4d6fb24b37b6531a6",
            date: '13.03.2021'
        }
    ],
    musicText: ''
}

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MUSIC: {
            return {
                ...state,
                musicData: [...state.musicData, {
                    id: 5,
                    preview: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e2f9aa74-7587-4a30-b0c0-4df61d7ac308/43.jpg',
                    name: state.musicText,
                    date: '20.07.2019',
                }],
                musicText: ""
            }
        }
        case FOLLOW:
            return {
                ...state,
                //music: [...state.musicData]
                music: state.musicData.map(el => {
                        if (el.id === action.id) {
                            return {
                                ...el,
                                followed: true

                            }
                        }
                        return el;
                    }
                )
            }


        case UNFOLLOW:
            return {
                ...state,
                //music: [...state.musicData]
                music: state.musicData.map(el => {
                        if (el.id === action.id) {
                            return {
                                ...el,
                                followed: true
                            }
                        }
                        return el;
                    }
                )
            }

        case SET_MUSIC:{
            return {
                ...state,
                musicData: [...state.musicData, ...action.music]
            }
        }

        case UPDATE_TEXT_MUSIC: {
            return {
                ...state,
                musicText: action.value
            }
        }
        default:
            return state;
    }
}


export default musicReducer;
export const followActionCreater = (musicId) => ({type: FOLLOW, musicId});
export const unfollowActionCreater = (musicId) => ({type: UNFOLLOW, musicId});
export const setActionCreaterMusic = (music) => ({type: SET_MUSIC, music});
export const addMusicActionCreater = () => ({type: ADD_MUSIC});
export const updateTextMusicActionCreater = (value) => ({type: UPDATE_TEXT_MUSIC, value: value});