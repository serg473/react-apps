import React from "react";
import s from './Music.module.css'
import Music from "./Music";
import {addMusicActionCreater, updateTextMusicActionCreater} from "../../../Redux/music-reducer";
const MusicContainer = (props) => {
    let addPostMusic = () =>{
        let action = addMusicActionCreater();
        props.store.dispatch(action);
    }

    let updateTextMusic = (value) =>{
        let action = updateTextMusicActionCreater(value);
        props.store.dispatch(action);
    }

    return (<Music updateTextMusic = {updateTextMusic}
                   addPostMusic = {addPostMusic}
                   musics = {props.store.getState().musics.musicData}
                   musicValueText = {props.store.getState().musics.musicText} />)
}
export default MusicContainer;