const UPDATE_NEWS_TEXT = 'UPDATE_NEWS_TEXT';
const ADD_NEWS = 'ADD_NEWS';
const SET_NEWS_AC = 'SET_NEWS_AC';
const SET_NEW_COUNT = 'SET_NEW_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
    newsData: [],
    newsTextData: "",
    totalCount: 0,
    pageSize: 15,
    currentPage: 54
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS: {
            return {
                ...state,
                newsData: [...state.newsData, {id: 5, src: 'https://i.ytimg.com/vi/ie53jQ2uobc/maxresdefault.jpg', title: state.newsTextData, datePublish: '13.03.2022', tag: 'Общество'}],
            }
        }
        case UPDATE_NEWS_TEXT: {
            return{
                ...state,
                newsTextData: action.myText
            }
        }
        case SET_NEWS_AC:{
            return {
                ...state, newsData: action.newsValue
            }
        }
        case SET_NEW_COUNT:{
            return{
                ...state, totalCount: action.count
            }
        }

        case SET_CURRENT_PAGE:{
            return{
                ...state, currentPage: action.pageNumber
            }
        }

        default:
            return state
    }

}

export const postNewsTextActionCreater = (myText) => ({type: UPDATE_NEWS_TEXT, myText: myText})
export const getAddNewsActionCreater = () => ({type: ADD_NEWS})
export const setNewsAC = (newsValue) => ({type: SET_NEWS_AC, newsValue})
export const setTotalCountNewsAC = (count) => ({type: SET_NEW_COUNT, count})
export const setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export default newsReducer;