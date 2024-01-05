/* eslint-disable */
import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #fff;
  padding: 0 2rem;
  position: sticky;
  top: 0;
`;

export const Navbarul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Navbarli = styled.li`
  margin: 0 1rem;
  font-weight: 400;
  font-size: 16px;
  transition: transform 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    margin: 0 0.5rem;
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const MainTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: black;
  border-radius: 30px;
  margin: 0 2rem;
`;

export const MainTitle = styled.p`
  font-size: 120px;
  font-weight: 400;
  color: white;
  margin-bottom: 1rem;
  font-family: "Space Mono", monospace;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;
