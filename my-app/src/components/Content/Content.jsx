import React from "react"
import s from './Content.module.css'
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import NewsContainer from "./News/NewsContainer";

const Content = (props) =>{
    return(
        <main className={s.content}>
            <Routes>
                <Route path='/dialogs/*' element={<DialogsContainer store = {props.store}/>}/>
                <Route path='/music'  element={<Music/>}/>
                <Route path='/news/*' element={<NewsContainer store = {props.store} />}/>
                <Route path='/settings' element={<Settings/>}/>
            </Routes>
        </main>
    )
}
export default Content;