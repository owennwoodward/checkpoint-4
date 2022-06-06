import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";



const weatherApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather'
})



class WeathersService {
    async getWeather() {
        const res = await weatherApi.get('')
        // console.log(res.data);
        ProxyState.weather = new Weather(res.data)
        console.log(res.data);
    }

    async ktoC() {

    }
}



export const weathersService = new WeathersService