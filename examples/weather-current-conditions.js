import AccuWeatherWrapper from '../src/main'

global.fetch = require('node-fetch')

const accuweather = new AccuWeatherWrapper({})

const locationKey = 3387236

const currentConditions = accuweather.getWeather.currentConditions(locationKey)

currentConditions.then(data => console.log(data))
