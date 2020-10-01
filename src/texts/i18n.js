import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import jaTranslation from './jaTranslation.json';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      ja: {
        translations:jaTranslation,
      },
      en: {
        translations: {
          "To get started, edit <1>src/App.js</1> and save to reload.":
            "To get started, edit <1>src/App.js</1> and save to reload.",
          "Welcome to React": "Welcome to React and react-i18next",
          welcome: "Hello <br/> <strong>World</strong>"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });
  
export default i18n;

