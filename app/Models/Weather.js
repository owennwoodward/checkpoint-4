


export class Weather {
    constructor(data) {
        this.weather = data.weather[0].main
        this.main = ((data.main.temp - 273.15) * 1.8) + 32;
        this.celsius = (data.main.temp - 273.15)
    }


    get Template() {
        return `
        <div class="col-12 text-light">
        <div class="fahrenheit text-light"><h2>${this.main}<span>Fahrenheit<span></h2></div>
        <div class="hide text-light celsius"><h3>${this.celsius}<span>Celsius<span></h3></div>
      </div>
        `
    }

    get Celsius() {
        return `
        
        <button class=" p-2 btn btn-outline-danger" onclick="app.weathersController.seeCelsius()"> See Celsius </button>
        <p class="text-start">${this.main}</p>

        `
    }

    get fahrenheit() {
        return `
        
        <button class=" p-2 btn btn-outline-danger" onclick="app.weathersController.seeFahrenheit()"> See Fahrenheit </button>
        <p class="text-start">${this.celsius}</p>

        `
    }
}