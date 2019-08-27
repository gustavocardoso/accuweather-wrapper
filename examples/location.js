import AccuWeatherWrapper from '../src/main'

global.fetch = require('node-fetch')

const accuweather = new AccuWeatherWrapper({
  token: 'QeBDBAoZneiKDUGi1DHMqf4hnDn7tGN9'
})

const locationKey = accuweather.getLocation.byGeoposition(49.2093644, -123.1270038)

locationKey.then(data => console.log('Location:', data))
