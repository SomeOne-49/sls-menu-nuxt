// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  colorMode: {
    preference: 'light',
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    [
      '@nuxtjs/i18n',
      {
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'ar',
        fallbackLocale: 'ar',
        locales: [
          {
            code: 'en',
            name: 'English',
            file: 'en.json',
          },
          {
            code: 'ar',
            name: 'العربية',
            file: 'ar.json',
          },
        ],
      },
    ],
  ],
  googleFonts: {
    families: {
      Alexandria: [300, 400, 500, 600, 700, 800, 900],
    },
  },

  // i18n: {
  //   vueI18n: './i18n.config.ts',
  // },
  typescript: {
    typeCheck: true,
  },
});
