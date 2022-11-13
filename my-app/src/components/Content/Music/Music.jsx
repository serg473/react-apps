import s from './Music.module.css'

const Music = (props) => {
    debugger;
    return <div className={s.album_music}>

        {
            props.musics.map(el => <div key = {el.id}>

                <div className={s.img_container}>
                    <img src={el.preview} alt=""/>
                </div>

                <div>
                    {el.name}
                </div>
                <div>
                    {el.date}
                </div>

                    {el.followed ? <button onClick={() => {props.follow(el.id)}}>Отписаться</button> : <button onClick={() => {props.unfollow(el.id)}}>Подписаться</button>}


            </div>)
        }
    </div>
}
export default Music;