import React from "react";
import {getAddNewsActionCreater, postNewsTextActionCreater} from "../../../Redux/news-reducer";
import News from "./News";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        newsTextData: state.news.newsTextData,
        news: state.news.newsDat
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
        }
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)

export default NewsContainer;