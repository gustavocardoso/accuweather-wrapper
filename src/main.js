import { apiURL } from './config'

export default class AccuWeatherWrapper {
  constructor (options) {
    this.apiURL = options.apiURL || apiURL
    this.token = options.token
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
