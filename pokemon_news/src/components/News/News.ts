import { createApp } from "vue";
import News from "./News.vue";

export const mount = (el: any, props: { onViewAll?: () => {} }) => {
    createApp(News, props).mount(el);
}
