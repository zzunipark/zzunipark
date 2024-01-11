/*eslint-disable*/
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

export const SubNavbar = styled.div`
  background-color: rgb(31, 31, 31);
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainCodeSpace = styled.div`
  background-color: rgb(27, 27, 27);
  position: absolute;
  top: 35px;
  left: 55px;
  right: 0;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

export const MainCodeSpaceTitle = styled.p`
  color: white;
  font-size: 50px;
  font-family: monospace;
`;

export const MainCodeSpaceSubTitle = styled.p`
  color: rgb(150, 150, 150);
  font-size: 30px;
  font-family: monospace;
  margin-bottom: 5px;
`;

export const MainCodeSpaceContentUl = styled.ul`
  color: white;
  font-size: 20px;
  font-family: monospace;
  margin-top: 40px;
`;

export const MainCodeSpaceContentRecentUl = styled.ul`
  color: white;
  font-size: 15px;
  font-family: monospace;
  margin-top: 5px;
`;

export const MainCodeSpaceContentRecentLi = styled.li`
  color: #5495ff;
  font-size: 13px;
  font-family: monospace;
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
  font-family: monospace;
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
  padding: 0 55px;
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
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-size: 10px;
`;
