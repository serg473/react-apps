import s from './Music.module.css'
import axios from "axios";
import musicPhoto from './images/43.jpg'
import React from "react";
import mp from "../MyProfile/MyProfile.module.css";

class Music extends React.Component{

    componentDidMount() {
        if (this.props.users.length===0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesize}`)
                .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setMusicTotalCount(response.data.totalCount)
            })
        }
    }
    onchangedPaged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setMusicTotalCount(response.data.totalCount)
            })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalMusicCount / this.props.pagesize);
        let pages = [];
        for(let i=1; i <= pagesCount; i++){
            pages.push(i);
        }

        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);

        return <div className={s.album_music}>
            <div className={s.pagination}>
                {
                    slicedPages.map(el => {
                      return <span
                          onClick={(e) => {this.onchangedPaged(el)} }
                          className={this.props.currentPage === el && s.active}>{el}</span>
                    })}
            </div>
            {
                this.props.users.map(u => <div className={s.item} key = {u.id}>

                    <div className={s.img_container}>
                        <img src={ u.photos.small != null ? u.photos.small : musicPhoto} alt=""/>
                    </div>

                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.date}
                    </div>
                    {u.followed ? <button onClick={() => {this.props.unfollowing(u.id)}}>Отписаться</button>  : <button onClick={() => {this.props.following(u.id)}}>Подписаться</button>}
                    <span className={s.like}>{u.like ? <img src="https://www.svgrepo.com/show/13689/like.svg" alt=""/> : <img src="https://www.svgrepo.com/show/13686/like.svg" alt=""/> } </span>
                </div>)
            }
        </div>
    }
}
export default Music