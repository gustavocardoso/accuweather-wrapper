export default function weather () {
  return {
    currentConditions: (locationKey, metric = false) => {
      const url = `${this.apiURL}/currentconditions/v1/${locationKey}?apikey=${
        this.token
      }${metric ? '&metric=true' : ''}`

      return this.request(url)
    },

    oneDayForecast: (locationKey, metric = false) => {
      const url = `${this.apiURL}/forecasts/v1/daily/1day/${locationKey}?apikey=${
        this.token
      }${metric ? '&metric=true' : ''}`

      return this.request(url)
    },

    fiveDaysForecast: (locationKey, metric) => {
      const url = `${this.apiURL}/forecasts/v1/daily/5day/${locationKey}?apikey=${
        this.token
      }${metric ? '&metric=true' : ''}`

      return this.request(url)
    }
  }
}
