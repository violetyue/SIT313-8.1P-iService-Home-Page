import React from "react";
import HeaderImage from "./images/HeaderImage.jpg"

function HeaderPart() {
    return(
        <div className='header-div'>
            <img src={HeaderImage} height={515}/>
            <h1 style={{textAlign:'center'}}>Featured Experts</h1>
        </div>
    )
}

export default HeaderPart