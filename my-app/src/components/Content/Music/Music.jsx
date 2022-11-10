import React, {createRef} from "react";
import s from './Music.module.css'
import MusicItem from "./MusicItem/MusicItem";
const Music = (props) => {
    let linkElement = React.createRef();
    const addMusicPost = () =>{
        props.addPostMusic()
    }

    const updateTextPostMusic = () =>{
        let value = linkElement.current.value;
        props.updateTextMusic(value)
    }

    let musicItem = props.musics.map(el => <MusicItem key = {el.id} id = {el.id} name = {el.name} date = {el.date}/>)
    return (
        <div>
            {musicItem}
            <div>
                <button onClick={addMusicPost}>Добавить музыку</button>
                <div>
                    <textarea onChange={updateTextPostMusic} name="" ref={linkElement} value = {props.musicValueText}  cols="30" rows="10" />
                </div>
            </div>
        </div>
    )
}
export default Music;