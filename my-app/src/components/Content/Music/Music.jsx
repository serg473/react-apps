import React from 'react';
import s from './Music.module.css'
import musicPhoto from './images/43.jpg'

const Music = (props) => {
    let pagesCount = Math.ceil(props.totalMusicCount / props.pagesize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return <div className={s.album_music}>
        <div className={s.pagination}>
            {
                slicedPages.map(el => {
                    return <span
                        onClick={(e) => {
                            props.onchangedPaged(el)
                        }}
                        className={props.currentPage === el && s.active}>{el}</span>
                })}
        </div>
        {
            props.users.map(u => <div className={s.item} key={u.id}>

                <div className={s.img_container}>
                    <img src={u.photos.small != null ? u.photos.small : musicPhoto} alt=""/>
                </div>

                <div>
                    {u.name}
                </div>
                <div>
                    {u.date}
                </div>
                {u.followed ? <button onClick={() => {
                    props.unfollowing(u.id)
                }}>Отписаться</button> : <button onClick={() => {
                    props.following(u.id)
                }}>Подписаться</button>}
                <span className={s.like}>{u.like ? <img src="https://www.svgrepo.com/show/13689/like.svg" alt=""/> :
                    <img src="https://www.svgrepo.com/show/13686/like.svg" alt=""/>} </span>
            </div>)
        }
    </div>
};

export default Music;