import { NewsInterface } from '@/interfaces/news.interface';
import moment from 'moment';

class NewsApi {

    static getLatestNews = (): Promise<NewsInterface[]> => {
        // @ts-ignore
        const apiKey = process.env.NEWS_API_KEY;

        return fetch('https://newsapi.org/v2/everything?q=pokemon&sortBy=publishedAt&apiKey=' + apiKey, { method: 'GET' })
            .then((response: Response) => response.json())
            .then(({ articles }: { articles: any[]}) => {
                return articles
                    .slice(0, 10)
                    .map(article => ({
                        title: article.title,
                        image: article.urlToImage,
                        url: article.url,
                        date: moment(article.publishedAt).format('DD MMM YYYY')
                    }))
            });
    }
}

const deleteHTMLTagsAndFormat = (text: string) => {
    return text.split(/<[^>]+>/).join('').split('&gt;').join('>').split('&lt;').join('<');
}

export default NewsApi;
