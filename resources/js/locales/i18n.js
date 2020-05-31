import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import ptBr from './pt-br';

Vue.use(VueI18n);

const messages = {
    'en': en,
    'pt-br': ptBr
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'pt-br', // set fallback locale
    messages, // set locale messages
});

export default i18n;