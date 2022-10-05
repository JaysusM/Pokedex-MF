<template>
    <a>{{ loading }}</a>
    <p v-for="item in news" v-html="item.title"></p>
</template>

<script>
    import NewsApi from '../shared/news-api';
    export default {
        name: "news",
        data() {
            return {
                loading: true,
                news: []
            }
        },
        created() {
            return NewsApi.getLatestNews()
                .then((news) => {
                    this.loading = false;
                    this.news = news
                });
        }
    }
</script>