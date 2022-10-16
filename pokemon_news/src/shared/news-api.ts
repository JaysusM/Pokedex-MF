import { NewsInterface } from '@/interfaces/news.interface';

class NewsApi {

    static getLatestNews = (count: number = 6, offset: number = 0): Promise<NewsInterface[]> => {
        return fetch(`https://api.pokemon.com/us/api/news/?index=${ offset }&count=${ count }`)
            .then((response: Response) => response.json())
            .catch((error: Error) => {
                console.error(error.message);
                return [];
            });  
    }
}

export default NewsApi;
