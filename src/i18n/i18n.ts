import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import hi from "./locales/hi.json";
import mr from "./locales/mr.json";
import ml from "./locales/ml.json";
import te from "./locales/te.json";
import gu from "./locales/gu.json";
import bn from "./locales/bn.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    mr: { translation: mr },
    ml: { translation: ml },
    te: { translation: te },
    gu: { translation: gu },
    bn: { translation: bn },
  },
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
