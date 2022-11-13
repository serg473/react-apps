import React from "react";
import s from './Music.module.css'
import Music from "./Music";
import {
    addMusicActionCreater,
    followActionCreater,
    setActionCreaterMusic,
    unfollowActionCreater,
    updateTextMusicActionCreater
} from "../../../Redux/music-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return{
        musics: state.musics.musicData,
        musicValueText: state.musics.musicText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

        follow: (musicId) =>{
            dispatch(followActionCreater(musicId))
        },
        unfollow: (musicId) =>{
            dispatch(unfollowActionCreater(musicId))
        },
        setActionMusic: (music) =>{
            dispatch(setActionCreaterMusic(music))
        },
        updateTextMusic: (value) =>{
            let action = updateTextMusicActionCreater(value);
            dispatch(action);
        },
        addPostMusic: () =>{
            dispatch(addMusicActionCreater());
        },
    }
}

const MusicContainer = connect(mapStateToProps,mapDispatchToProps)(Music);

export default MusicContainer;