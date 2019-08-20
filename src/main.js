import { apiURL } from './config'

import location from './location'

export default class AccuWeatherWrapper {
  constructor (options) {
    this.apiURL = options.apiURL || apiURL
    this.token = options.token

    this.getLocation = location.bind(this)()
  }

  request (url) {
    const headers = {
      headers: {
        'Accept-Encoding': 'gzip,deflate'
      }
    }

    return fetch(url, headers).then(data => data.json())
  }
}
