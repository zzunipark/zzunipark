import styled from "styled-components";

export const MainPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: #171717;
`;

export const MainPageSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	color: white;
	background-color: #ededed;
	height: 100%;
	width: 40vw;
`;

export const MainPageTitleSection = styled.div`
	font-size: 2rem;
	font-weight: bold;
	text-align: left;
	width: 100%;
`;

export const MainPageNavSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: center;
	gap: 1rem;
	width: 100%;
`;

export const MainPageNavUl = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: center;
	width: 100%;
`;

export const MainPageNavLi = styled.li`
	list-style: none;
`;

export const MainPageContentSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const MainPageFooterSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const MainPageFooterHr = styled.hr`
	width: 80%;
`;

export const MainPageFooterLeftSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const MainPageFooterRightSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
