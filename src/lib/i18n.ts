import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enLanguages from "../locales/en/en.json";
import ptLanguages from "../locales/pt/pt.json";

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				...enLanguages,
			},
			pt: {
				...ptLanguages,
			},
		},
		lng: "pt",
	});
