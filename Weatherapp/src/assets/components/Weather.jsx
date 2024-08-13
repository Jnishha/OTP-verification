import React from "react";
import "./Weather.css"
import search from "./search.png"

const Weather=()=>{
    return(
        <div className="box">
           <div className="search">
            <input type="text" placeholder="Search" />
            <img src={search}></img>
           </div>
        </div>
    );
};

export default Weather;