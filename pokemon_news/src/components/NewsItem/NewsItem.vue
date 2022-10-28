<template>
    <div class="news-item" :class="skeleton && 'skeleton'" v-on:click="!skeleton && openNewsItem(newsItem)">
        <img class="bg" src="/pikachu_bg.png" />
        <div class="news-item-information">
            <h4 v-if="!skeleton" v-html="newsItem.title"></h4>
            <div class="news-item-action" v-if="!skeleton">
                <img src="/pokeball.svg" />
                <i>Read full information</i>
                <img src="/pokeball.svg" />
            </div>
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
        background: #b8b8b870;
        padding: 0 0 0 10px;
        border-radius: 5px;
        margin: 10px 0;
        cursor: pointer;
        position: relative;
        box-shadow: 2px 2px 8px 2px #00000038;
    }

    .news-item > .bg {
        position: absolute;
        left: 0;
        top: 0;
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
        min-width: 100%;
        border-radius: 5px;
        opacity: 0.075;
        filter: grayscale(1);
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
        text-align: center;
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
        border-radius: 10px;
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