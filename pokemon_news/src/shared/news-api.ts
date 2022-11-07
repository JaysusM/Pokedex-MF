import { NewsInterface } from '@/interfaces/news.interface';
import moment from 'moment';

class NewsApi {

    static getLatestNews = (): Promise<NewsInterface[]> => {
        // @ts-ignore
        const apiKey = process.env.NEWS_API_KEY;

        return fetch('https://newsdata.io/api/1/news?q=pokemon&country=us&language=en&category=entertainment,technology,top&apikey=' + apiKey, { method: 'GET' })
            .then((response: Response) => response.json())
            .then(({ results }: { results: any[]}) => {
                return results
                    .filter(article => article.image_url && article.title.toLowerCase().includes('pokemon'))
                    .slice(0, 10)
                    .map(article => ({
                        title: article.title,
                        image: article.image_url,
                        url: article.link,
                        date: moment(article.pubDate).format('DD MMM YYYY')
                    }))
            });
    }
}

const deleteHTMLTagsAndFormat = (text: string) => {
    return text.split(/<[^>]+>/).join('').split('&gt;').join('>').split('&lt;').join('<');
}

export default NewsApi;
