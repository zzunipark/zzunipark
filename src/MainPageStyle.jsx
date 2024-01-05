/* eslint-disable */
import styled from "styled-components";
import reactpng from "./images/react.png";

export const MainContainer = styled.div`
  background-color: rgb(27, 27, 27);
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainCodeSpace = styled.div`
  background-color: rgb(27, 27, 27);
  position: absolute;
  top: 35px;
  left: 320px;
  right: 0;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
`;

export const MainCodeSpaceTitle = styled.p`
  color: white;
  font-size: 50px;
  font-family: "Courier New", monospace;
`;

export const MainCodeSpaceSubTitle = styled.p`
  color: rgb(150, 150, 150);
  font-size: 30px;
  font-family: "Courier New", monospace;
  margin-bottom: 5px;
`;

export const MainCodeSpaceContentUl = styled.ul`
  color: white;
  font-size: 20px;
  font-family: "Courier New", monospace;
  margin-top: 40px;
`;

export const MainCodeSpaceContentRecentUl = styled.ul`
  color: white;
  font-size: 15px;
  font-family: "Courier New", monospace;
  margin-top: 5px;
`;

export const MainCodeSpaceContentRecentLi = styled.ul`
  color: #5495ff;
  font-size: 13px;
  font-family: "Courier New", monospace;
  margin-top: 5px;
  width: 500px;
  cursor: pointer;

  &:hover {
    color: #5495ff;
    text-decoration: underline;
  }
`;

export const MainCodeSpaceContentRecentDesc = styled.span`
  color: rgb(150, 150, 150);
`;

export const MainCodeSpaceContentLi = styled.li`
  color: rgb(150, 150, 150);
  font-size: 15px;
  font-family: "Courier New", monospace;
  margin-top: 5px;
  width: 500px;
`;

export const TopNavbar = styled.div`
  background-color: rgb(23, 23, 23);
  height: 35px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 320px;
  flex-direction: column;
`;

export const TopNavbarPageTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(27, 27, 27);
  width: 130px;
  height: 35px;
  border-bottom: 1px solid rgb(55, 55, 55);
  color: white;
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;
`;

export const TopNavbarPageIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${reactpng});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

export const SubNavbar = styled.div`
  background-color: rgb(27, 27, 27);
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainNavbar = styled.div`
  background-color: rgb(23, 23, 23);
  height: 100vh;
  position: absolute;
  top: 0;
  left: 70px;
  width: 250px;
  display: flex;
`;

export const MainNavbarBrowser = styled.div`
  background-color: rgb(23, 23, 23);
  height: 35px;
  position: absolute;
  top: 0;
  left: 0px;
  width: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MainNavbarBrowserText = styled.div`
  color: rgb(150, 150, 150);
  font-size: 13px;
  margin-left: 15px;
`;

export const MainNavbarBrowserActiveProject = styled.div`
  background-color: rgb(27, 27, 27);
  height: 18px;
  position: absolute;
  top: 35px;
  left: 0px;
  width: 250px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const MainNavbarBrowserActiveProjectText = styled.div`
  color: rgb(150, 150, 150);
  font-size: 11px;
  margin-left: 15px;
  align-items: center;
  display: flex;
`;

export const MainNavbarFileBrowser = styled.div`
  background-color: rgb(23, 23, 23);
  height: calc(100vh - 73px);
  position: absolute;
  top: 60px;
  left: 0px;
  width: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const MainNavbarBrowserUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;

export const MainNavbarBrowserLi = styled.ul`
  color: rgb(150, 150, 150);
  font-size: 14px;
  cursor: pointer;
  padding: 4px 15px;
  width: 220px;
  height: 15px;
  background-color: transparent;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgb(40, 40, 40);
  }
`;

export const MainNavbarBrowserLiActive = styled.ul`
  color: rgb(190, 190, 190);
  font-size: 14px;
  cursor: pointer;
  padding: 4px 15px;
  width: 220px;
  height: 15px;
  background-color: transparent;
  display: flex;
  align-items: center;
  background-color: rgb(40, 40, 40);

  &:hover {
    background-color: rgb(40, 40, 40);
  }
`;

export const MainNavbarBrowserLiFileTypeBox = styled.ul`
  width: 15px;
  height: 15px;
  background-image: url(${reactpng});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 5px;
`;

export const FooterBar = styled.div`
  background-color: rgb(31, 31, 31);
  height: 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterSeperation = styled.div`
  background-color: rgb(36, 36, 36);
  height: 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-size: 10px;
`;
