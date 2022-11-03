import React from "react";
import s from './Music.module.css'
import Music from "./Music";
import {addMusicActionCreater, updateTextMusicActionCreater} from "../../../Redux/music-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return{
        musics: state.musics.musicData,
        musicValueText: state.musics.musicText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updateTextMusic: (value) =>{
            let action = updateTextMusicActionCreater(value);
            dispatch(action);
        },
        addPostMusic: () =>{
            dispatch(addMusicActionCreater());
        }
    }
}

const MusicContainer = connect(mapStateToProps,mapDispatchToProps)(Music);

export default MusicContainer;