import { defineCustomElement } from 'vue';
import App from "./App.vue";

const AppElement = defineCustomElement(App);
customElements.define('vue-app', AppElement);