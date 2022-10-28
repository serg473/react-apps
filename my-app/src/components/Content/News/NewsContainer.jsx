import React from "react";
import {getAddNewsActionCreater, postNewsTextActionCreater} from "../../../Redux/news-reducer";
import News from "./News";
import StoreContext from "../../../StoreContext";

const NewsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();
                let getAddNews = () => {
                    let action = getAddNewsActionCreater();
                    store.dispatch(action);
                }
                let postNewsText = (myText) => {
                    let action = postNewsTextActionCreater(myText);
                    store.dispatch(action);
                }
                return <News updateNewsText={postNewsText} addNews={getAddNews} news={state.news.newsData}
                             newsTextData={state.news.newsTextData}/>
            }
        }
    </StoreContext.Consumer>
}
export default NewsContainer;