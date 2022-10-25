import { NewsInterface } from '@/interfaces/news.interface';

class NewsApi {

    static getLatestNews = (count: number = 6, offset: number = 0): Promise<NewsInterface[]> => {

        // This endpoint is deprecated, no longer updated :'(
        // return fetch(`https://api.pokemon.com/us/api/news/?index=${ offset }&count=${ count }`)
        //     .then((response: Response) => response.json())
        //     .catch((error: Error) => {
        //         console.error(error.message);
        //         return [];
        //     });

        // Data scraping information...
        return fetch('https://api.pokemon.com/us')
            .then((response: Response) => response.text())
            .then((text: string) => {
                text = text.split('\n').join('');
                text = text.split('\r').join('');
                text = text.replace(/>( )+</g, '><');
                const articles: string[] = text.trim().match(/<a href="[^"]+"><h3>[^<]+<\/h3><p>[^<]*<\/p><img src="[^"]+" alt="[^"]+" \/>[^(<\/a>)]*<\/a>/g) ?? [];                
                return articles.map((element) => {
                    const title = deleteHTMLTagsAndFormat(element.match('<h3>.*</h3>')?.[0] ?? '');
                    const image = element.match('<img src="[^"]+" alt="[^"]+" \/>')?.[0].split('src="')[1].split('"')[0] ?? '';
                    const url = element.split('href="')[1].split('"')[0];
                    return {
                        title,
                        image,
                        url
                    };
                }); 
            })
    }
}

const deleteHTMLTagsAndFormat = (text: string) => {
    return text.split(/<[^>]+>/).join('').split('&gt;').join('>').split('&lt;').join('<');
}

export default NewsApi;
