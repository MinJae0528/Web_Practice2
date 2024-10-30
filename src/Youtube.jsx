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
                    <button className="HomeButton">
                        <img src="YoutubeHome-icon.jpg" />
                        <span>홈</span>
                    </button>
                    <button className="ShortsButton">
                        <img src="YoutubeShorts-icon.png" />
                        <span>Shorts</span>
                    </button>
                    <button className="SubscribeButton">
                        <img src="YoutubeSubscribe-icon.png" />
                        <span>구독</span>
                    </button>
                </div>
                <hr></hr>
                <div className="MyPage">
                    <button className="MyPageButton">
                        <span>내 페이지</span>
                        <img src="YoutubeRightArrow-icon.png"/>
                    </button>
                    <button className="ViewingHistoryButton">
                        <img src="YoutubeViewingHistory-icon.jpg" />
                        <span>시청 기록</span>
                    </button>
                    <button className="PlaylistButton">
                        <img src="YoutubePlaylist-icon.png" />
                        <span>재생목록</span>
                    </button>
                    <button className="MyVideoButton">
                        <img src="YoutubeMyVideo-icon.png" />
                        <span>내 동영상</span>
                    </button>
                    <button className="MyMovieButton">
                        <img src="YoutubeMyMovie-icon.png" />
                        <span>내 영화</span>
                    </button>
                    <button className="WatchLaterButton">
                        <img src="YoutubeWatchLater-icon.png" />
                        <span>나중에 볼 동영상</span>
                    </button>
                    <button className="GreatButton">
                        <img src="YoutubeGreat-icon.png" />
                        <span>좋아요 표시한 동영상</span>
                    </button>
                </div>
                <hr></hr>
                <div className="Subscribe">

                </div>
                <hr></hr>
                <div className="Quest">

                </div>
                <hr></hr>
                <div className="MoreSee">

                </div>
                <hr></hr>
                <div className="Convenience">

                </div>
                <hr></hr>
                <div className="information">

                </div>
            </aside>
        </div>
    )
}

export default Youtube;