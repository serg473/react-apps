import React from "react"
import s from './Content.module.css'
import Settings from "./Settings/Settings";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import NewsContainer from "./News/NewsContainer";
import MusicContainer from "./Music/MusicContainer";

const Content = () =>{
    return(
        <main className={s.content}>
            <Routes>
                <Route path='/dialogs/*' element={<DialogsContainer />}/>
                <Route path='/music/*'  element={<MusicContainer />}/>
                <Route path='/news/*' element={<NewsContainer />}/>
                <Route path='/settings' element={<Settings />}/>
            </Routes>
        </main>
    )
}
export default Content;