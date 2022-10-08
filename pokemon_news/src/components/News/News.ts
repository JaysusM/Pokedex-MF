import { createApp } from "vue";
import News from "./News.vue";

export const mount = (el: any) => {
    createApp(News).mount(el);
}
