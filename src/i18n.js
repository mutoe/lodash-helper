import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { lstore } from './utils'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[a-z0-9]+\.yml$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([a-z0-9]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

function getDefaultLocale () {
  let lang = lstore.get('lang') || window.navigator.language
  if (['zh-CN'].includes(lang)) lang = 'zh'
  return lang || process.env.VUE_APP_I18N_LOCALE || 'en'
}

export default new VueI18n({
  locale: getDefaultLocale(),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
})
