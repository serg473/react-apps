import s from './Music.module.css'
import axios from "axios";
import musicPhoto from './images/43.jpg'

const Music = (props) => {

        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger;
                props.setUsers(response.data.items)
            })
        }


    return <div className={s.album_music}>
        {
            props.users.map(u => <div className={s.item} key = {u.id}>

                <div className={s.img_container}>
                    <img src={ u.photos.small != null ? u.photos.small : musicPhoto} alt=""/>
                </div>

                <div>
                    {u.name}
                </div>
                <div>
                    {u.date}
                </div>
                {u.followed ? <button onClick={() => {props.unfollowing(u.id)}}>Отписаться</button>  : <button onClick={() => {props.following(u.id)}}>Подписаться</button>}
                <span className={s.like}>{u.like ? <img src="https://www.svgrepo.com/show/13689/like.svg" alt=""/> : <img src="https://www.svgrepo.com/show/13686/like.svg" alt=""/> } </span>
            </div>)
        }
    </div>
}
export default Music;