<template>
    <div class="news-wrapper">
        <div class="news-header">
            <h3>Pokémon News</h3>
            <a @click="this.onViewAll?.()">View all</a>
        </div>
        <div v-for="item in news" class="news-item" v-on:click="openNewsItem(item)">
            <div class="news-item-title">
                <h4 v-html="item.title"></h4>
                <p>{{ item.date }}</p>
            </div>
            <img v-bind:src=item.image />
        </div>
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

    .news-wrapper > .news-header > h3 {
        margin: 0;
    }

    .news-wrapper > .news-item {
        display: flex;
        flex-direction: row;
        max-height: 130px;
        background: #00000024;
        padding: 0 0 0 10px;
        border-radius: 5px;
        margin: 10px 0;
        cursor: pointer;
    }

    .news-wrapper > .news-item > .news-item-title {
        display: flex;
        flex-direction: column;
        min-width: calc(60% - 25px);
        padding-right: 5px;
    }
    
    .news-wrapper > .news-item > .news-item-title > h4 {
        margin-bottom: 0;
    }

    .news-wrapper > .news-item > img {
        min-width: 40%;
        object-fit: cover;
        flex: 1;
        border-radius: 30px;
        padding: 15px 10px;
    }
</style>

<script>
    import NewsApi from '../../shared/news-api';
    export default {
        name: "news",
        props: {
            onViewAll: { type: Function }
        },
        methods: {
            openNewsItem: (item) => {
                window.open(item.url, '_blank');
            }
        },
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
                    this.news = news;
                });
        }
    }
</script>