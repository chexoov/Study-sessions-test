import { createI18n } from "vue-i18n";
import { en, ru } from "../locales";

const i18n = createI18n({
  locale: "es",
  fallbackLocale: "en",
  messages: {
    en,
    ru,
  },
});

export default i18n;
