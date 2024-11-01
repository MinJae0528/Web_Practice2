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
                <div className="Subscribe">
                    <h3>구독</h3>
                    <button className="UserButton">
                        <img src="User-icon.png" />
                        <span>홍길동</span>
                    </button>
                    <button className="UserButton">
                        <img src="User-icon.png" />
                        <span>홍길동</span>
                    </button>
                    <button className="UserButton">
                        <img src="User-icon.png" />
                        <span>홍길동</span>
                    </button>
                    <button className="UserButton">
                        <img src="User-icon.png" />
                        <span>홍길동</span>
                    </button>
                    <button className="UserButton">
                        <img src="User-icon.png" />
                        <span>홍길동</span>
                    </button>
                    <button className="UserButton">
                        <img src="User-icon.png" />
                        <span>홍길동</span>
                    </button>
                    <button className="UserButton">
                        <img src="User-icon.png" />
                        <span>홍길동</span>
                    </button>
                    <button className="UserButton">
                        <img src="YoutubeDropdown-icon.png" />
                        <span>더보기</span>
                    </button>
                </div>
                <div className="Quest">
                    <h3>탐색</h3>
                    <button className="TrendingButton">
                        <img src="YoutubeTrending-icon.png" />
                        <span>인기 급상승</span>
                    </button>
                    <button className="ShoppingButton">
                        <img src="YoutubeShoppingBag-icon.png" />
                        <span>쇼핑</span>
                    </button>
                    <button className="SongButton">
                        <img src="Song-icon.png" />
                        <span>음악</span>
                    </button>
                    <button className="MovieButton">
                        <img src="YoutubeMyMovie-icon.png" />
                        <span>영화</span>
                    </button>
                    <button className="StreamingButton">
                        <img src="YoutubeStreaming-icon.png" />
                        <span>실시간</span>
                    </button>
                    <button className="GameButton">
                        <img src="YoutubeGame-icon.png" />
                        <span>게임</span>
                    </button>
                    <button className="SportsButton">
                        <img src="YoutubeSports-icon.png" />
                        <span>스포츠</span>
                    </button>
                    <button className="StudyProgramButton">
                        <img src="YoutubeStudyProgram-icon.png" />
                        <span>학습 프로그램</span>
                    </button>
                    <button className="PodcastButton">
                        <img src="YoutubePodcast-icon.png" />
                        <span>팟캐스트</span>
                    </button>
                </div>
                <div className="MoreSee">
                    <h3>Youtube 더보기</h3>
                    <button className="PodcastButton">
                        <img src="Youtube-logo.jpg" />
                        <span>YouTube Premium</span>
                    </button>
                    <button className="PodcastButton">
                        <img src="YoutubeStudio-icon.jpg" />
                        <span>YouTube 스튜디오</span>
                    </button>
                    <button className="PodcastButton">
                        <img src="YoutubeMusic-icon.png" />
                        <span>YouTube Music</span>
                    </button>
                    <button className="PodcastButton">
                        <img src="YoutubeKids-icon.png" />
                        <span>YouTube Kids</span>
                    </button>
                </div>
                <div className="Convenience">
                    <button className="SettingButton">
                        <img src="YoutubeSetting-icon.png" />
                        <span>설정</span>
                    </button>
                    <button className="ReportButton">
                        <img src="YoutubeReport-icon.png" />
                        <span>신고 기록</span>
                    </button>
                    <button className="ServiceCenterButton">
                        <img src="YoutubeServiceCenter-icon.png" />
                        <span>고객센터</span>
                    </button>
                    <button className="FeedbackButton">
                        <img src="YoutubeFeedback-icon.png" />
                        <span>의견 보내기</span>
                    </button>
                </div>
                <div className="information">
                    <p>정보 보도자료 저작권
                        문의하기 크리에이터 광고 개발자
                        약관 개인정보처리방침 정책 및 안전 YouTube 작동의 원리 새로운 기능 테스트하기
                        © 2024 Google LLC, Sundar Pichai, 
                        1600 Amphitheatre Parkway, 
                        Mountain View CA 94043, USA, 
                        0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅: 
                        Google LLC, 사업자정보, 불법촬영물 신고
                        크리에이터들이 유튜브 상에 게시, 
                        태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 
                        유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다.
                    </p>
                </div>
            </aside>
        </div>
    )
}

export default Youtube;