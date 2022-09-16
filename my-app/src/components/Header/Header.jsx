import React from "react"
import s from './Header.module.css'
import Navbar from "./Navbar/Navbar";

const Header = () =>{
    return(
        <header className={s.header}>
                <div className={s.logo}>
                    <img src="https://us.123rf.com/450wm/andyadi/andyadi1802/andyadi180200513/95572662-vector-logo-ontwerp-voor-schoonheidssalon-dermatologie-centrum-en-wellness-huis-.jpg?ver=6" alt=""/>
                </div>
                <div className={s.menu}>
                    <Navbar />
                </div>
        </header>
    )
}
export default Header;