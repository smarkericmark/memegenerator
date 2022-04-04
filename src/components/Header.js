import React from "react";

export default function Header() {
    return (

        <header className="header--box">
            <img src={require(`../images/TrollFace.png`)} className="header--logo" />
            <div className="header--title">
                <h2>Meme Generator</h2>
            </div>
            <div className="header--project">
                <h4>React Project</h4>
            </div>
        </header>
    )
}