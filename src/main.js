import dotenv from 'dotenv'
import { apiURL } from './config'

import location from './location'
import weather from './weather'

dotenv.config()

export default class AccuWeatherWrapper {
  constructor (options) {
    this.apiURL = apiURL
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
