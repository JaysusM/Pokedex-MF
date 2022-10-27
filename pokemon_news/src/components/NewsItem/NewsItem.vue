<template>
    <div class="news-item" :class="skeleton && 'skeleton'" v-on:click="!skeleton && openNewsItem(newsItem)">
        <div class="news-item-title">
            <h4 v-if="!skeleton" v-html="newsItem.title"></h4>
            <p v-if="!skeleton">{{ newsItem.date }}</p>
        </div>
        <img v-if="!skeleton" v-bind:src=newsItem.image />  
    </div>
</template>

<style scoped>
    .news-item {
        display: flex;
        flex-direction: row;
        max-height: 130px;
        min-height: 130px;
        background: #00000024;
        padding: 0 0 0 10px;
        border-radius: 5px;
        margin: 10px 0;
        cursor: pointer;
    }

    @keyframes waveEffect {
        from {
            left: -100%;
        }

        50% {
            left: 50%;
        }

        to {
            left: 200%;
        }
    }


    .news-item.skeleton {
        position: relative;
        overflow: hidden;
        cursor: default;
    }

    .news-item.skeleton::after { 
        content: '';
        width: 100%;
        left: -100%;
        height: 100%;
        position: absolute;
        animation: waveEffect 2.5s linear infinite;
        background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
    }

    .news-item > .news-item-title {
        display: flex;
        flex-direction: column;
        min-width: calc(60% - 25px);
        padding-right: 5px;
    }
    
    .news-item > .news-item-title > h4 {
        margin-bottom: 0;
    }

    .news-item > img {
        min-width: 40%;
        object-fit: cover;
        flex: 1;
        border-radius: 30px;
        padding: 15px 10px;
    }
</style>

<script>
    export default {
        name: "news-item",
        props: {
            skeleton: Boolean,
            newsItem: Object
        },
        methods: {
            openNewsItem: (item) => {
                const url = item.url.includes('http') ? item.url : `https://pokemon.com${item.url}`;
                window.open(url, '_blank');
            }
        }
    }
</script>