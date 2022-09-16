import React from "react"
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.Navbar}>
            <ul className={s.list}>
                <li><NavLink to='/'>Главная</NavLink></li>
                <li><NavLink to='/dialogs'>Сообщения</NavLink></li>
                <li><NavLink to='/news'>Новости</NavLink></li>
                <li><NavLink to='/settings'>Настройки</NavLink></li>
                <li><NavLink to='/music'>Музыка</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;