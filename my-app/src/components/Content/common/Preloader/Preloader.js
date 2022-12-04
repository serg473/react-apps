import React from 'react';
import loader from "../../Music/images/loading.svg";

const Preloader = () => {
    return (
        <div>
            <img src={loader} alt=""/>
        </div>
    );
};

export default Preloader;