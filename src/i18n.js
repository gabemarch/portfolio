import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import en from "./translations/en.json";
import hu from "./translations/hu.json";

const resources = {
  en: {
    translation: en,
  },
  hu: {
    translation: hu,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "hu",
    fallbackLng: "hu",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
