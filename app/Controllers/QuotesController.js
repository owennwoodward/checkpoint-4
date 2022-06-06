import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";



function _drawQuotes() {
    let quotes = ProxyState.quotes
    document.getElementById('quotes').innerHTML = quotes.Template
}


export class QuotesController {
    constructor() {
        this.getQuotes()
        ProxyState.on('quotes', _drawQuotes)
    }

    async getQuotes() {
        try {
            await quotesService.getQuotes()

        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }
}