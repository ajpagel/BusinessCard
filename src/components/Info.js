//photo, name, buttons, etc.

import React from "react";
import myPicture from "../images/me.png";


function InformationSection () {
    return (
        <div className="info--container">
            <img src={myPicture} className="photo" />
                <h1 className="info--name">Amanda Pagel</h1>
                <h2 className="info--position">Front End Developer</h2>
                <h3 className="info--website">(website coming soon)</h3>
                <button className="btn">Email</button>
        </div>
        
    )
}

export default InformationSection;
