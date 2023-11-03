import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend"

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'ro'],
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie']
        },
        fallbackLng: "en",
        backend: {loadPath: 'assets/locales/{{lng}}/translation.json'}, //for production
        // backend: {loadPath: 'public/assets/locales/{{lng}}/translation.json'}, //for development
    });
