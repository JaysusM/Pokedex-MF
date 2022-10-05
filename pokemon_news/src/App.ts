import { defineCustomElement } from 'vue';
import App from "./components/App.vue";

const AppElement = defineCustomElement(App);
customElements.define('vue-app', AppElement);
