import dotenv from 'dotenv/config'

import location from './location'
import weather from './weather'

export default class AccuWeatherWrapper {
  constructor (options) {
    this.apiURL = options.apiURL || process.env.API_URL
    this.token = options.token || process.env.ACCESS_TOKEN

    this.getLocation = location.bind(this)()
    this.getWeather = weather.bind(this)()
  }

  request (url) {
    const headers = {
      headers: {
        'Accept-Encoding': 'gzip,deflate'
      }
    }

    return fetch(url, headers)
      .then(data => data.json())
      .catch(err => ({ error: err.name }))
  }
}
