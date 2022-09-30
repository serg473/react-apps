import React from "react"
import s from './Content.module.css'
import Dialogs from "./Dialogs/Dialogs";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import {Route, Routes} from "react-router-dom";

const Content = (props) =>{
    debugger;
    return(
        <main className={s.content}>
            <Routes>
                <Route path='/dialogs/*' element={<Dialogs addPost = {props.addPost}  state = {props.state.profile}/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/news/*' element={<News state = {props.state.news} />}/>
                <Route path='/settings' element={<Settings/>}/>
            </Routes>
        </main>
    )
}
export default Content;