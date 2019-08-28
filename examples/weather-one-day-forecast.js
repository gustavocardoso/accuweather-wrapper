import AccuWeatherWrapper from '../src/main'

global.fetch = require('node-fetch')

const accuweather = new AccuWeatherWrapper({})

const locationKey = 3387236

const oneDayForecast = accuweather.getWeather.oneDayForecast(locationKey)

oneDayForecast.then(data => {
  console.log('')
  console.log('One day forecast')
  console.log(data)
  console.log('')
  console.log(data.DailyForecasts[0].Temperature)
})

const oneDayForecastMetric = accuweather.getWeather.oneDayForecast(locationKey, true)

oneDayForecastMetric.then(data => {
  console.log('')
  console.log('One day forecast - metric system')
  console.log(data)
  console.log('')
  console.log(data.DailyForecasts[0].Temperature)
})
