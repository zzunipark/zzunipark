/* eslint-disable */
import * as s from "./MainPageStyle";

const redirectToUrl = (url) => {
  window.location.href = url;
};

const RedirectToFANFANTV = () => redirectToUrl("https://www.fanfantv.online");
const RedirectTozzuniLabs = () => redirectToUrl("https://www.zzunilabs.team");
const RedirectToToU = () => alert("ToU 프로젝트는 아직 배포되지 않았습니다.");
const RedirectToArduGotchi = () => redirectToUrl("https://github.com/zzunipark/ArduGotchi");
const RedirectTozzuniHomelab = () => alert("zzuniHomelab 프로젝트 설명 페이지가 제작중입니다.");
const RedirectToDrawWang = () => alert("DrawWang 프로젝트는 아직 개발중입니다.");
const RedirectTozzuniCloud = () => alert("zzuniCloud 프로젝트는 아직 개발중입니다.");
const RedirectToSendRN = () => alert("SendRN 프로젝트는 아직 개발중입니다.");

function MainPage() {
  return (
    <>
      <s.MainContainer>
        <s.MainCodeSpace>
          <s.MainCodeSpaceTitle>MinJun Park</s.MainCodeSpaceTitle>
          <s.MainCodeSpaceSubTitle>Growth & Execution </s.MainCodeSpaceSubTitle>
          <s.MainCodeSpaceContentUl>
            Introduction
            <s.MainCodeSpaceContentLi>
              Hello, I'm MinJun Park. I am a high school student developer, aiming to create positive impacts through development while crafting user-friendly solutions. I am not only focused on my major field but also have a keen interest in various tech stacks. Based on this diverse knowledge, I
              am working on various projects.
            </s.MainCodeSpaceContentLi>
          </s.MainCodeSpaceContentUl>
          <s.MainCodeSpaceContentUl>
            Recent Projects
            <s.MainCodeSpaceContentLi>
              <s.MainCodeSpaceContentRecentUl>
                <s.MainCodeSpaceContentRecentLi onClick={RedirectToFANFANTV}>
                  FANFANTV <s.MainCodeSpaceContentRecentDesc>~/Meme/Sharing/Service</s.MainCodeSpaceContentRecentDesc>
                </s.MainCodeSpaceContentRecentLi>
                <s.MainCodeSpaceContentRecentLi onClick={RedirectTozzuniLabs}>
                  zzuniLabs <s.MainCodeSpaceContentRecentDesc>~/MinJunPark's/ProjectLab</s.MainCodeSpaceContentRecentDesc>
                </s.MainCodeSpaceContentRecentLi>
                <s.MainCodeSpaceContentRecentLi onClick={RedirectToToU}>
                  ToU <s.MainCodeSpaceContentRecentDesc>~/Letter-Sending/With-Profanity-Filter</s.MainCodeSpaceContentRecentDesc>
                </s.MainCodeSpaceContentRecentLi>
                <s.MainCodeSpaceContentRecentLi onClick={RedirectToArduGotchi}>
                  ArduGotchi <s.MainCodeSpaceContentRecentDesc>~/Tamagotchi-Game/Made-With-Arduino</s.MainCodeSpaceContentRecentDesc>
                </s.MainCodeSpaceContentRecentLi>
              </s.MainCodeSpaceContentRecentUl>
            </s.MainCodeSpaceContentLi>
          </s.MainCodeSpaceContentUl>
          <s.MainCodeSpaceContentUl>
            Currently Developing
            <s.MainCodeSpaceContentLi>
              <s.MainCodeSpaceContentRecentUl>
                <s.MainCodeSpaceContentRecentLi onClick={RedirectTozzuniHomelab}>
                  zzuniHomelab <s.MainCodeSpaceContentRecentDesc>~/Homelab-Project</s.MainCodeSpaceContentRecentDesc>
                </s.MainCodeSpaceContentRecentLi>
                <s.MainCodeSpaceContentRecentLi onClick={RedirectToDrawWang}>
                  DrawWang <s.MainCodeSpaceContentRecentDesc>~/Draw-Well/To-Be-King</s.MainCodeSpaceContentRecentDesc>
                </s.MainCodeSpaceContentRecentLi>
                <s.MainCodeSpaceContentRecentLi onClick={RedirectTozzuniCloud}>
                  zzuniCloud <s.MainCodeSpaceContentRecentDesc>~/Serverless/Cloud-Service</s.MainCodeSpaceContentRecentDesc>
                </s.MainCodeSpaceContentRecentLi>
                <s.MainCodeSpaceContentRecentLi onClick={RedirectToSendRN}>
                  SendRN <s.MainCodeSpaceContentRecentDesc>~/Send/Right-Now</s.MainCodeSpaceContentRecentDesc>
                </s.MainCodeSpaceContentRecentLi>
              </s.MainCodeSpaceContentRecentUl>
            </s.MainCodeSpaceContentLi>
          </s.MainCodeSpaceContentUl>
        </s.MainCodeSpace>
        <s.TopNavbar>
          <s.TopNavbarPageTab>
            <s.TopNavbarPageIconBox></s.TopNavbarPageIconBox>Welcome.jsx
          </s.TopNavbarPageTab>
        </s.TopNavbar>
        <s.SubNavbar>dd</s.SubNavbar>
        <s.FooterBar>
          <s.FooterSeperation></s.FooterSeperation>
        </s.FooterBar>
      </s.MainContainer>
    </>
  );
}

export default MainPage;
