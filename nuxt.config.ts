// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/content', 'nuxt-i18n-micro'],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', dir: 'ltr', displayName: 'English' },
      { code: 'cs', iso: 'cs-CZ', dir: 'ltr', displayName: 'Cestina' },
    ],
    defaultLocale: 'cs',
    translationDir: 'locales',
    meta: false,
    disablePageLocales: true,
     
    
  },
})