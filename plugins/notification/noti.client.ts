import notify from "./Notification.vue";
import { createApp } from "vue";

export default {
    
  install: (app) => {
    const nuxtApp = useNuxtApp();
    let timeoutId;
    const removeElement = (element) => {
      element.remove();
    };
    nuxtApp.provide("notify", (options) => initElement(options));
    const initElement = (options) => {
      const notifyComponent = document.getElementById("notify");
      if (notifyComponent) {
        removeElement(notifyComponent);
        createElement(options);
      } else {
        createElement(options);
      };

      nuxtApp.$bus.$on("close", () => {
        const closeComponent = document.getElementById("notify");
        removeElement(closeComponent)
      });
    };

    const createElement = (options) => {
      const parent = document.getElementById("__nuxt");
      const notifychild = document.createElement("div");
      notifychild.setAttribute("id", "notify");
      parent?.appendChild(notifychild);
      app.component("componentNotify", notify);
      const mountComponent = createApp(app.component("componentNotify"), {
        text: options.text,
        type: options.type,
      });
      mountComponent.mount(notifychild);
    
      clearTimeout(timeoutId);
    
      timeoutId = setTimeout(() => {
        const closeComponent = document.getElementById("notify");
        removeElement(closeComponent);
      }, 3000);
    
      return mountComponent;
    };
    
  },
};