import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";




const quotesApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
    timeout: 10000
})


class QuotesService {
    async getQuotes() {
        const res = await quotesApi.get('')
        // console.log(res.data);
        ProxyState.quotes = new Quote(res.data)
        console.log(ProxyState.quotes);
    }
}


export const quotesService = new QuotesService()