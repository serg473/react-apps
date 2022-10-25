const UPDATE_NEWS_TEXT = 'UPDATE_NEWS_TEXT';
const ADD_NEWS = 'ADD_NEWS';

let initialReduces = {
    newsData: [
        {
            id: 1,
            src: 'https://i.ytimg.com/vi/ie53jQ2uobc/maxresdefault.jpg',
            title: 'БЕЛАЗ проведет день открытых дверей 24 сентября',
            datePublish: '13.03.2022',
            tag: 'Политика'
        },
        {
            id: 2,
            src: 'https://i.ytimg.com/vi/ie53jQ2uobc/maxresdefault.jpg',
            title: 'В здании парламента Чехии сократят время и температуру отопления',
            datePublish: '13.03.2022',
            tag: 'Экономика'
        },
        {
            id: 3,
            src: 'https://i.ytimg.com/vi/ie53jQ2uobc/maxresdefault.jpg',
            title: 'Сальдо: референдум в Херсонской области реализует право на самоопределение',
            datePublish: '13.03.2022',
            tag: 'Политика'
        },
        {
            id: 4,
            src: 'https://i.ytimg.com/vi/ie53jQ2uobc/maxresdefault.jpg',
            title: 'В Бельгии начали отключать освещение на автотрассах',
            datePublish: '13.03.2022',
            tag: 'Общество'
        }
    ],
    newsTextData: ""
}

const newsReducer = (state = initialReduces, action) => {

    switch (action.type) {
        case ADD_NEWS:
            let newsPost = {
                id: 5,
                src: 'https://i.ytimg.com/vi/ie53jQ2uobc/maxresdefault.jpg',
                title: state.newsTextData,
                datePublish: '13.03.2022',
                tag: 'Общество'
            }
            state.newsData.push(newsPost);
            state.newsTextData = "";
            return state;
            break;
        case UPDATE_NEWS_TEXT:
            state.newsTextData = action.myText;
            return state;
            break;
        default:
            return state
    }
}
export const postNewsTextActionCreater = (myText) => ({type: UPDATE_NEWS_TEXT, myText: myText})
export const getAddNewsActionCreater = () => ({type: ADD_NEWS})
export default newsReducer;