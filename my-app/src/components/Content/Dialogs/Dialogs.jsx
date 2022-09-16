import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import User from "./User/User";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <div className={s.user}>
                    <User name='Сергей Дубинка'/>
                    <User name='Елизавета Трухан'/>
                    <User name='Елена Дубинка'/>
                    <User name='Анастасия Мироненко'/>
                </div>
                <div className={s.message}>
                    <Message message='Hello!'/>
                    <Message message='How are you?'/>
                    <Message message='What is yout name?'/>
                    <Message message='Goodby!'/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;