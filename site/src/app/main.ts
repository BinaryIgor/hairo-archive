import { createApp } from "vue";
import App from './App.vue'
import { translation } from "./i18n/translations";
import Modal from '../components/shared/Modal.vue';
import { routes, router } from "./routing";
import { uiLangStore } from "./source";

async function main(): Promise<any> {
  const lang = uiLangStore.get();
  const translations = await translation(lang);
  const app = createApp(App);
  app.config.globalProperties.$translations = translations;
  app.config.globalProperties.$routes = routes;

  app.use(router);
  app.component('Modal', Modal);
  app.mount('#app');

  function appHeight() {
    const doc = document.documentElement
    doc.style.setProperty('--vh', (window.innerHeight * .01) + 'px');
  }

  window.addEventListener('resize', appHeight);
  appHeight();

  return app;
}

const app = main();

export { app };
