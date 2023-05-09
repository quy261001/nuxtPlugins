import notify from "./noti.client";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(notify);
});