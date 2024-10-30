import React from 'react';
import './Youtube.css';

const Youtube = () => {
    return (
        <div className="Youtube">
            <header className="Header">
                <div className="MenuAndLogo">
                    <button className="Menu"><img src="/Menu-icon.png"></img></button>
                    <a href="https://www.youtube.com/" target="_blank">
                    <img src= "/Youtube-TextLogo.jpg" className="logo" alt="Youtube logo" />
                    </a>
                </div>
                <div className="Search">
                    <div className="SearchContainer">
                        <input type="text" className="txtSearch"></input>
                        <button className="SearachButton">
                            <img src="/Search-icon.png" alt="검색" />
                        </button>
                    </div>
                    <button className="MicButton">
                        <img src="/Mic-icon.jpg" />
                    </button>
                </div>
                <div className="Setting">
                    <button className="CreateButton">
                        <img src="VideoCreate-icon.png" />
                    </button>
                    <button className="AlarmButton">
                        <img src="YoutubeAlarm-icon.png" />
                    </button>
                    <button className="UserButton">
                        <img src="User-icon.png" />
                    </button>
                </div>
            </header>
            <aside className="Sidebar">
                <div className="VideoMenu">

                </div>
                <div className="MyPage">

                </div>
                <div className="Subscribe">

                </div>
                <div className="Quest">

                </div>
                <div className="MoreSee">

                </div>
                <div className="Convenience">

                </div>
                <div className="information">
                    
                </div>
            </aside>
        </div>
    )
}

export default Youtube;