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

    fetch(url, headers)
  }
}
