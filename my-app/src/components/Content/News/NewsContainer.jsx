import React from "react";
import {
    getAddNewsActionCreater,
    postNewsTextActionCreater, setCurrentPageAC,
    setNewsAC,
    setTotalCountNewsAC
} from "../../../Redux/news-reducer";
import News from "./News";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        newsTextData: state.newsPage.newsTextData,
        newsData: state.newsPage.newsData,
        currentPage: state.newsPage.currentPage,
        pageSize: state.newsPage.pageSize,
        totalCount: state.newsPage.totalCount,
    }


}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewsText: (myText) => {
            let action = postNewsTextActionCreater(myText);
            dispatch(action);
        },
        addNews:() => {
            let action = getAddNewsActionCreater();
            dispatch(action);
        },
        setNewsPost: (newsValue) => {
            dispatch(setNewsAC(newsValue))
        },
        setTotalCountNews: (count) =>{
            dispatch(setTotalCountNewsAC(count))
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        }
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)

export default NewsContainer;