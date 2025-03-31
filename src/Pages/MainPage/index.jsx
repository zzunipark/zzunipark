import React, { useContext } from "react";
import * as s from "./style";
import { LanguageContext } from "../../Contexts/LanguageContext";

const MainPage = () => {
	const { language, toggleLanguage } = useContext(LanguageContext);

	return (
		<div>
			{language === "ko" ? (
				<>
					<s.MainPageContainer>
						<s.MainPageSection>
							<s.MainPageTitleSection>
								MinJun Park
							</s.MainPageTitleSection>
							<s.MainPageNavSection>
								<s.MainPageNavUl>
									<s.MainPageNavLi>test</s.MainPageNavLi>
									<s.MainPageNavLi>test</s.MainPageNavLi>
									<s.MainPageNavLi>test</s.MainPageNavLi>
								</s.MainPageNavUl>
							</s.MainPageNavSection>
						</s.MainPageSection>
					</s.MainPageContainer>
				</>
			) : (
				<>
					<s.MainPageContainer></s.MainPageContainer>
				</>
			)}
		</div>
	);
};

export default MainPage;
