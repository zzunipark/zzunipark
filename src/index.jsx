import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Styles/GlobalStyle";
import * as p from "./Pages";
import { LanguageProvider } from "./Contexts/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<LanguageProvider>
		<Router>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<p.MainPage />} />
			</Routes>
		</Router>
	</LanguageProvider>
);
