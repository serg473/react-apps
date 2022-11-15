import s from './Music.module.css'

const Music = (props) => {
    if(props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    followed: false,
                    name: 'Linkin Park',
                    preview: "https://www.todorock.com/wp-content/uploads/2019/10/linkin-park-the-hunting-party.jpg",
                    date: '20.07.2022'
                },
                {
                    id: 2,
                    followed: true,
                    name: 'Metallica',
                    preview: "https://townsquare.media/site/295/files/2015/08/MET1.jpg?w=980&q=75",
                    date: '20.07.2022'
                },
                {
                    id: 3,
                    followed: false,
                    name: 'Qeen',
                    preview: "https://preview.redd.it/ojb5py3gjvl31.jpg?auto=webp&s=d0291f4e885a197b69d7b063bc6a6076325738ce",
                    date: '20.07.2022'
                },
                {
                    id: 4,
                    followed: true,
                    name: 'Ne-yo',
                    preview: "https://upload.wikimedia.org/wikipedia/en/2/23/Ne_Yo_-_Non_Fiction_%28Official_Album_Cover%29.png",
                    date: '20.07.2022'
                },
                {
                    id: 5,
                    followed: false,
                    name: 'Pitbull',
                    preview: "https://i.scdn.co/image/ab67616d0000b27314eb5ef4d6fb24b37b6531a6",
                    date: '13.03.2021'
                }
            ]
        )
    }
    return <div className={s.album_music}>

        {
            props.users.map(u => <div key = {u.id}>

                <div className={s.img_container}>
                    <img src={u.preview} alt=""/>
                </div>

                <div>
                    {u.name}
                </div>
                <div>
                    {u.date}
                </div>

                    {u.followed ?
                        <button onClick={() => {props.unfollowing(u.id)}}>Отписаться</button>
                        : <button onClick={() => {props.following(u.id)}}>Подписаться</button>}

            </div>)
        }
    </div>
}
export default Music;