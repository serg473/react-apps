import s from './Music.module.css'
import axios from "axios";
import musicPhoto from './images/43.jpg'
import React from "react";
import mp from "../MyProfile/MyProfile.module.css";

class Music extends React.Component{

    componentDidMount() {
        if (this.props.users.length===0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return <div className={s.album_music}>

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


            <div className={mp.pagination}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
        </div>
    }
}
export default Music