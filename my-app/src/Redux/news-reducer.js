const UPDATE_NEWS_TEXT = 'UPDATE_NEWS_TEXT';
const ADD_NEWS = 'ADD_NEWS';
const newsReducer = (state, action) => {
    debugger;
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