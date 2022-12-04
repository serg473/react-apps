import React from "react";
import s from './News.module.css'
import NewsItem from "./NewsItem/NewsItem";
import axios from "axios";

class News extends React.Component {

    componentDidMount() {
        if (this.props.newsData.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
                this.props.setNewsPost(res.data.items)
                this.props.setTotalCountNews(res.data.totalCount)
            })
        }
    }

    changecurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
            this.props.setNewsPost(res.data.items)
        })
    }

    render() {
        let sizePagination = Math.ceil(this.props.totalCount / this.props.pageSize);
        let arrPage = [];
        for (let i = 1; i <= sizePagination; i++) {
            arrPage.push(i);
        }
        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
        let curPL = curP + 5;
        let slicedPages = arrPage.slice(curPF, curPL);
        let newsDate = this.props.newsData.map(news => <NewsItem key={news.id} id={news.id} photos={news.photos.small}
                                                                 name={news.name}/>);
        let addNews = React.createRef();
        let getAddNews = () => {
            this.props.addNews();
        }
        let postNewsText = () => {
            let myText = addNews.current.value;
            this.props.updateNewsText(myText);
        }
        return (
            <div className={s.news}>
                <div className={s.pagination}>
                    {slicedPages.map(el => {
                        return <span
                            onClick={() => {this.changecurrentPage(el)}}
                            className={this.props.currentPage === el ? s.active : ''}>{el}</span>
                    })
                    }
                </div>
                {newsDate}
                <div>
                    <textarea onChange={postNewsText} ref={addNews} value={this.props.newsTextData} cols="30"
                              rows="10"></textarea>
                    <div>
                        <button onClick={getAddNews}>AddNews</button>
                    </div>
                </div>
            </div>
        )
    }


}

export default News;