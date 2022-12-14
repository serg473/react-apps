 import profileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";
import friendsReducer from "./friends-reducer";



let store = {
    _state: {
        profile: {
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
        },
        news: {
            newsData: [
                {
                    id: 1,
                    src: 'https://i.ytimg.com/vi/ie53jQ2uobc/maxresdefault.jpg',
                    title: '?????????? ???????????????? ???????? ???????????????? ???????????? 24 ????????????????',
                    datePublish: '13.03.2022',
                    tag: '????????????????'
                },
                {
                    id: 2,
                    src: 'https://i.ytimg.com/vi/ie53jQ2uobc/maxresdefault.jpg',
                    title: '?? ???????????? ???????????????????? ?????????? ???????????????? ?????????? ?? ?????????????????????? ??????????????????',
                    datePublish: '13.03.2022',
                    tag: '??????????????????'
                },
                {
                    id: 3,
                    src: 'https://i.ytimg.com/vi/ie53jQ2uobc/maxresdefault.jpg',
                    title: '????????????: ???????????????????? ?? ???????????????????? ?????????????? ?????????????????? ?????????? ???? ??????????????????????????????',
                    datePublish: '13.03.2022',
                    tag: '????????????????'
                },
                {
                    id: 4,
                    src: 'https://i.ytimg.com/vi/ie53jQ2uobc/maxresdefault.jpg',
                    title: '?? ?????????????? ???????????? ?????????????????? ?????????????????? ???? ??????????????????????',
                    datePublish: '13.03.2022',
                    tag: '????????????????'
                }
            ],
            newsTextData: ""
        },
        friends: {
            friendsData: [
                {id: 1, name: 'Sergey', src: 'https://www.w3schools.com/howto/img_avatar.png'},
                {id: 2, name: 'Elena', src: 'https://www.w3schools.com/howto/img_avatar2.png'},
                {id: 3, name: 'Nastya', src: 'https://www.w3schools.com/howto/img_avatar2.png'},
                {id: 4, name: 'Masha', src: 'https://www.w3schools.com/howto/img_avatar2.png'},
                {id: 5, name: 'Dima', src: 'https://www.w3schools.com/howto/img_avatar.png'},
                {id: 6, name: 'Petr', src: 'https://www.w3schools.com/howto/img_avatar.png'},
                {id: 7, name: 'Igor', src: 'https://www.w3schools.com/howto/img_avatar.png'},
            ]
        },
        musics:{
            musicData:[
                {id: 1, name: 'Linkin Park', date: '20.07.2022' },
                {id: 2, name: 'Metallica', date: '20.07.2022' },
                {id: 3, name: 'Qeen', date: '20.07.2022' },
                {id: 4, name: 'Ne-yo', date: '20.07.2022' },
                {id:5, name: 'Pitbull', date: '13.03.2021'}
            ],
            musicText: ''
        }
    },
    _callBackFunction() {
        console.log('State was changed!');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callBackFunction = observer;
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.news = newsReducer(this._state.news, action);
        this._state.friends = friendsReducer(this._state.friends, action);

        this._callBackFunction(this._state)
    },
}



window.store = store;
export default store;