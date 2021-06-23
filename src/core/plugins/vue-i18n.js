import Vue from "vue";
import VueI18n from "vue-i18n";

// Localisation language list
import { locale as en } from "@/core/config/i18n/en";
import { locale as kz } from "@/core/config/i18n/kz";
import { locale as ru } from "@/core/config/i18n/ru";

Vue.use(VueI18n);

let messages = {};
messages = {...messages, en, kz, ru };

// get current selected language
const lang = localStorage.getItem("language") || "en";

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: lang, // set locale
    messages // set locale messages
});

export default i18n;