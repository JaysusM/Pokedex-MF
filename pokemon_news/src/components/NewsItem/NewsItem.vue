<template>
    <div class="news-item" :class="skeleton && 'skeleton'" v-on:click="!skeleton && openNewsItem(newsItem)"> 
        <div class="news-item-information">
            <h4 v-if="!skeleton" v-html="newsItem.title"></h4>
            <p v-if="!skeleton" v-html="newsItem.date"></p>
        </div>
        <img class="news-item-image" v-if="!skeleton" v-bind:src=newsItem.image />  
    </div>
</template>

<style scoped>

    .news-item {
        display: flex;
        flex-direction: row;
        max-height: 130px;
        min-height: 130px;
        margin: 10px 0;
        border-bottom: 1px solid #a2a2a257;
        cursor: pointer;
        position: relative;
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

    .news-item > .news-item-information {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: calc(60% - 25px);
        padding-right: 5px;
    }
    
    .news-item > .news-item-information > h4 {
        margin: 0;
    }

    .news-item > .news-item-information > p {
        color: #9f9f9f;
        font-size: 12px;
    }

    .news-item > .news-item-information > .news-item-action {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }

    .news-item > .news-item-information > .news-item-action > img {
        height: 1rem;
    }
    
    .news-item > .news-item-information > .news-item-action > img:first-child {
        margin-right: 5px;
    }

    .news-item > .news-item-information > .news-item-action > img:last-child {
        margin-left: 5px;
    }

    .news-item > .news-item-information > .news-item-action > i {
        font-size: 12px;
        margin: 0;
    }

    .news-item > img.news-item-image {
        min-width: 40%;
        object-fit: cover;
        flex: 1;
        border-radius: 25px;
        margin: 15px 10px;
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