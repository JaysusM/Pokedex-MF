<template>
    <div class="news-wrapper">
        <div class="news-header">
            <h2>Pokémon News</h2>
            <a @click="this.onViewAll?.()">View all</a>
        </div>
        <NewsItem v-if="!loading" v-for="item in news" :newsItem="item" />
        <NewsItem v-if="loading" v-for="_ in 3" :skeleton="true" />
    </div>
</template>

<style scoped>
    .news-wrapper {
        display: flex;
        flex-direction: column;
    }
    .news-wrapper > .news-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0 5px 0;
    }

    .news-wrapper > .news-header > h2 {
        margin: 0;
        font-size: 20px;
    }

    .news-wrapper > .news-header > a {
        color: #108dff;
    }
</style>

<script>
    import NewsApi from '../../shared/news-api';
    import NewsItem from '../NewsItem/NewsItem.vue';
    export default {
    name: "news",
    props: {
        onViewAll: { type: Function }
    },
    components: [
        NewsItem
    ],
    methods: {
        openNewsItem: (item) => {
            window.open(item.url, "_blank");
        }
    },
    data() {
        return {
            loading: true,
            news: []
        };
    },
    created() {
        return NewsApi.getLatestNews()
            .then((news) => {
                this.loading = false;
                this.news = news;
            }
        );
    },
    components: { NewsItem }
}
</script>