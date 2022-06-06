import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";


function _drawWeather() {
    let weather = ProxyState.weather
    console.log(weather);
    document.getElementById('weather').innerHTML = weather.Template
}


export class WeathersController {
    constructor() {
        // console.log('weather');
        this.getWeather()
        ProxyState.on('weather', _drawWeather)
    }


    async getWeather() {
        try {
            weathersService.getWeather()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

    seeCelsius() {
        document.getElementById('tempbody').innerHTML = ProxyState.activeWeather.Celsius
    }

    seeFahrenheit() {
        document.getElementById('tempbody').innerHTML = ProxyState.activeWeather.Fahrenheit
    }
}