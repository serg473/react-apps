import React from "react";
import s from './Music.module.css'

const Music = (props) => {
    let newsPostMusic = React.createRef();
    let postMusic = () => {
        let txt = newsPostMusic.current.value;
        alert(txt);
    }
    return (
        <div>
            Музыка
            <div>
                <button onClick={postMusic}>Добавить музыку</button>
                <div>
                    <textarea name="" ref={newsPostMusic} cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    )
}
export default Music;