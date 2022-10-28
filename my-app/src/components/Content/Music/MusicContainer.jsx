import React from "react";
import s from './Music.module.css'
import Music from "./Music";
import {addMusicActionCreater, updateTextMusicActionCreater} from "../../../Redux/music-reducer";
import StoreContext from "../../../StoreContext";

const MusicContainer = (props) => {


    return <StoreContext.Consumer>
        {

            (store) => {
                let addPostMusic = () => {
                    let action = addMusicActionCreater();
                    store.dispatch(action);
                }

                let updateTextMusic = (value) => {
                    let action = updateTextMusicActionCreater(value);
                    store.dispatch(action);
                }
                return <Music updateTextMusic={updateTextMusic}
                              addPostMusic={addPostMusic}
                              musics={store.getState().musics.musicData}
                              musicValueText={store.getState().musics.musicText}/>
            }
        }
    </StoreContext.Consumer>
}
export default MusicContainer;