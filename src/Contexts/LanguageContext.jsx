import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(() => {
		const storedLang = localStorage.getItem("language");
		return storedLang ? storedLang : "ko";
	});

	useEffect(() => {
		localStorage.setItem("language", language);
	}, [language]);

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === "en" ? "ko" : "en"));
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
