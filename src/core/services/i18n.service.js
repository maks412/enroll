const i18nService = {
    defaultLanguage: "en",

    languages: [{
            lang: "kz",
            name: "Kazakh",
            flag: process.env.BASE_URL + "media/svg/flags/074-kazakhstan.svg"
        },
        {
            lang: "en",
            name: "English",
            flag: process.env.BASE_URL + "media/svg/flags/226-united-states.svg"
        },
        {
            lang: "ru",
            name: "Russian",
            flag: process.env.BASE_URL + "media/svg/flags/013-russia.svg"
        },
    ],

    /**
     * Keep the active language in the localStorage
     * @param lang
     */
    setActiveLanguage(lang) {
        localStorage.setItem("language", lang);
    },

    /**
     * Get the current active language
     * @returns {string | string}
     */
    getActiveLanguage() {
        return localStorage.getItem("language") || this.defaultLanguage;
    }
};

export default i18nService;