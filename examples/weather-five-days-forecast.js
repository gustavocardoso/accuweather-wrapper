import AccuWeatherWrapper from '../src/main'

global.fetch = require('node-fetch')

const accuweather = new AccuWeatherWrapper({})

const locationKey = 3387236

const fiveDaysForecast = accuweather.getWeather.fiveDaysForecast(locationKey)

fiveDaysForecast.then(data => {
  console.log('')
  console.log('One day forecast')
  console.log(data)
  console.log('')
  console.log(data.DailyForecasts[0].Temperature)
})

const fiveDaysForecastMetric = accuweather.getWeather.fiveDaysForecast(locationKey, true)

fiveDaysForecastMetric.then(data => {
  console.log('')
  console.log('One day forecast - metric system')
  console.log(data)
  console.log('')
  console.log(data.DailyForecasts[0].Temperature)
})
