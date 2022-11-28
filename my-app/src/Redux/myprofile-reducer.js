const ADD_POST = 'ADD_POST';
const UPDATE_TEXT = 'UPDATE_TEXT';

let initialstate = {
    dataProfile: {
        id: 1,
        name: 'Дубинка Сергей',
        date: '18.07.1998',
        photo: 'https://sun9-66.userapi.com/impg/yOPwXGYhjo5oZBAslGQOnPQnmVYN6lda6XKCbA/QcsSoTzI4XU.jpg?size=1620x2160&quality=95&sign=fb6d27aa57fc0aac9c72ae4b92682ba9&type=album',
        location: {country: 'Беларусь', city: 'Солигорск'},
        male: 'Мужской пол',

    },

    dataPost: [
        {
            id: 1,
            title: 'Заголовок поста',
            photo: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
            body: 'Finally, OIOS believes that, even if outside comparator institutions did not have jobs comparable to posts in the Text Processing Section, this would not necessarily establish that qualified people are not available in the local market.'
        },
        {
            id: 2,
            title: 'Заголовок поста',
            photo: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
            body: 'Finally, OIOS believes that, even if outside comparator institutions did not have jobs comparable to posts in the Text Processing Section, this would not necessarily establish that qualified people are not available in the local market.'
        },
        {
            id: 3,
            title: 'Заголовок поста',
            photo: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
            body: 'Finally, OIOS believes that, even if outside comparator institutions did not have jobs comparable to posts in the Text Processing Section, this would not necessarily establish that qualified people are not available in the local market.'
        }
    ],
    newpostext: ''
}
const myprofileReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                dataPost: [...state.dataPost, {id: 4, title: 'Заголовок поста', photo: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png', body: state.newpostext
                }]
            }
        }
        case UPDATE_TEXT: {
            return {
                ...state, newpostext: action.value
            }
        }
        default:
            return state
    }
}


export const addPostAC = () => ({type: ADD_POST})
export const updatePostAC = (value) => ({type: UPDATE_TEXT, value})

export default myprofileReducer